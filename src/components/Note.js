import React from 'react';

function NoteSticker({ title, text,size }) {
  const stickerStyle = {
    padding: '10px',
    backgroundColor: 'yellow',
    // backgroundColor: '#b1e457',
whiteSpace: 'pre-line',
    width: size,
    height: size,
    borderRadius: '0px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontSize: '16px',
    lineHeight: '1.5',
    position: 'relative', // For absolutely positioned elements inside
    overflow: 'hidden' // In case of overflow
  };

  return (
    <div style={stickerStyle} className='mx-auto md:mx-2 my-4'>
      <h3 className='font-bold text-3xl mt-4 mb-4 text-center'> {title}</h3>
      <h3 className='font-semibold text-2xl '> {text}</h3>

    </div>
  );
}

export default NoteSticker;
