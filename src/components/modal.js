// components/Modal.js
import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
        onClose();
      }
    console.log(e)
  };

  return (
    <div className="modal-backdrop z-50" onClick={handleBackdropClick}>
        <button onClick={onClose} className="modal-close">
          &times;
        </button>
      <div className="modal-content">
        {children}
      </div>
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          background: #171721;
          padding: 20px;
          border-radius: 5px;
          position: relative;
          max-width: 80%;
          max-height: 90%;
          width: 100%;
          overflow-x: scroll;
        }
        @media (max-width: 768px) {
          .modal-content {
            max-width: 95%;
          }
        }
        .modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 36px;
          cursor: pointer;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Modal;
