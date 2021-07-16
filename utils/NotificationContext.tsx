// @ts-nocheck
import { CustomToast } from "components/CustomToast/CustomToast";
import { createContext } from "react";
import { toast } from 'react-toastify';

export const NotificationContext = createContext({
    showSuccess: a => {},
    showError: a => {},
    showInfo: a => {},
    showWarning: a => {},
    showCustom: a => {},
});

export function NotificationProvider({ children }) {
  const defaultProps = {
    title: 'Message',
    isStatus: false,
    status: false,
    hasExternal: false,
    externalLink: '/',
    hasInternal: false,
    internalLink: '/',
    linkLabel: 'More',
    closeFn: () => {
      toast.dismiss();
    },
  };
  const showSuccess = message => {
    showCustom({ message, status: "SUCCESS" });
  };
  const showError = message => {
    showCustom({ message, status: "ERROR" });
  };
  const showInfo = message => {
    showCustom({ message, status: "INFO"  });
  };
  const showWarning = message => {
    showCustom({ message, status: "INFO" });
  };
  const showCustom = (props = {}) => {
    toast(
      <CustomToast props={Object.assign(defaultProps, props)} />, 
      { 
        autoClose: props['status'] == "ERROR", 
        style: {
          margin: "1em" 
        }
      }
    );
  };
  return (
    <NotificationContext.Provider
      value={{
        showSuccess,
        showError,
        showInfo,
        showWarning,
        showCustom,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};