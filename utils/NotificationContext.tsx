// @ts-nocheck
import { createContext } from "react";
import { toast } from 'react-toastify';

export const NotificationContext = createContext({
    showSucess: a => {},
    showError: a => {},
    showInfo: a => {},
    showWarning: a => {},
    showCustom: a => {},
});

export function NotificationProvider({ children }) {
  const showSucess = message => {
    console.log(`hi`);
    toast.success(message);
  };
  const showError = error => {
    toast.error(error.message, { autoClose: false });
  };
  const showInfo = message => {
    toast.info(message);
  };
  const showWarning = message => {
    toast.warning(message);
  };
  const showCustom = (Component: any) => {
    toast(<Component />);
  };
  return (
    <NotificationContext.Provider
      value={{
        showSucess,
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