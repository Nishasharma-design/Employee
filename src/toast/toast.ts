import { toast } from 'react-toastify';

export const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success') => {
  toast(message, {
    type,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeButton: false,
    pauseOnHover: false,
    draggable: false,
    style: {
      borderRadius: '8px',
      padding: '12px 24px',
    },
  });
};

