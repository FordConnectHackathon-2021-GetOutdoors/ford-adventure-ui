// @ts-nocheck
import { createContext } from "react";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const NotificationContext = createContext({
    showSucess: a => {},
    showError: a => {},
    showInfo: a => {},
    showWarning: a => {},
    showCustom: a => {},
});

export function NotificationProvider({ children }) {
  const showSucess = message => {
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
      <ToastContainer
        position={toast.POSITION.BOTTOM_CENTER}
        transition={Flip}
        autoClose={8000}
        draggablePercent={50}
      >
        {children}
      </ToastContainer>
    </NotificationContext.Provider>
  );
};