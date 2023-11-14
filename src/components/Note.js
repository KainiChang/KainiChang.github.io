import React from 'react';

function NoteSticker({ title, text,size }) {
  const stickerStyle = {
    padding: '10px',
    margin: '10px',
    backgroundColor: 'yellow',
    width: size,
    height: size,
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontSize: '16px',
    lineHeight: '1.5',
    position: 'relative', // For absolutely positioned elements inside
    overflow: 'hidden' // In case of overflow
  };

  return (
    <div style={stickerStyle}>
      <h3 className='font-bold text-2xl mt-8 mb-4 text-center'> {title}</h3>
      <h3 className='font-semibold'> {text}</h3>

    </div>
  );
}

export default NoteSticker;
