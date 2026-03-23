import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        role="presentation"
      />

      {/* Modal content */}
      <div
        className="relative bg-white border-3 border-black p-8 max-w-lg w-full mx-4 z-10"
        style={{ boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)' }}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {title && (
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black uppercase">{title}</h2>
            <button
              onClick={onClose}
              className="text-2xl font-black hover:opacity-60 transition-opacity"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
