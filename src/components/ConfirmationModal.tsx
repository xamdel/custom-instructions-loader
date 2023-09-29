import React from 'react';

interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ModalProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button className='form-button' onClick={onConfirm}>Confirm</button>
        <button className='form-button' onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;