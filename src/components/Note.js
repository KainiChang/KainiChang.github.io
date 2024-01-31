import React from 'react';

function NoteSticker({ title, text,size }) {
  const stickerStyle = {
    padding: '10px',
    // backgroundColor: 'yellow',
    backgroundColor: '#fdf1b7',
whiteSpace: 'pre-line',
    width: size,
    height: size,
    borderRadius: '0px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'hand,  sans-serif',
    fontSize: '16px',
    lineHeight: '1.5',
    position: 'relative', 
    overflow: 'hidden'
  };

  return (
    <div style={stickerStyle} className='mx-auto md:mx-2 my-4'>
      <h3 className='font-bold font-hand text-3xl mt-4 mb-4 text-center'> {title}</h3>
      <h3 className='font-semibold font-hand text-2xl '> {text}</h3>

    </div>
  );
}

export default NoteSticker;
