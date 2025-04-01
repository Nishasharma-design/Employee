import React from "react";

import ReactModal from "react-modal";

import classes from './DeleteConfirmationModal.module.scss';


interface DeleteConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (id: number) => void;
    id: number; 
  }
  const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    id,
  }) => {
    return (
        <ReactModal 
           isOpen={isOpen}
           onRequestClose={onClose}
           contentLabel="Confirm Deletion"
           ariaHideApp={false}
           className={classes.modal}
           overlayClassName={classes.overlay}
           >

         <div className={classes.modal_content}>
            <h2>Are you sure you want to delete this employee?</h2>
            <p>This action cannot be undone.</p>
            <div className={classes.modal_actions}>
                <button className={classes.cancel_btn} onClick={onClose}>Cancel</button>
                <button className={classes.confirm_btn} onClick={() => onConfirm(id)}>Confirm</button>
            </div>
         </div>

           </ReactModal>
    );
};

export default DeleteConfirmationModal;