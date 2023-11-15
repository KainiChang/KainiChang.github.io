import React from 'react';

const Modal = ({ imgSrc, onClose }) => {
    if (!imgSrc) return null;
  
    const modalStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1000, // Make sure this is higher than other elements
      display: 'flex',
      alignItems: 'center', // Center the content vertically
      justifyContent: 'center', // Center the content horizontally
    };
  
    const imageStyle = {
      maxHeight: '90vh', 
      maxWidth: '90vw', 
      objectFit: 'contain' // Keep the aspect ratio of the image
    };
  
    return (
      <div style={modalStyle} onClick={onClose}>
        <img src={imgSrc} alt="Enlarged" style={imageStyle} />
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-white">
          Close
        </button>
      </div>
    );
  };
export default Modal;  
