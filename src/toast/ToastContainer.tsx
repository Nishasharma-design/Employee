
import { ToastContainer as ReactToastContainer } from 'react-toastify'; 

const ToastContainer = () => {
  return (
    <ReactToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      closeButton={false}
      pauseOnHover={false}
      draggable={false}
      style={{
        borderRadius: '8px',
        padding: '12px 24px',
      }}
    />
  );
};

export default ToastContainer;

