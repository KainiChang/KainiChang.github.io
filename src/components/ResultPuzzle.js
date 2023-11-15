import React from 'react';
import Piece1 from '../images/kaini.png';
import Piece2 from '../images/kaini2.png';
import Piece3 from '../images/kaini3.png';
import Piece4 from '../images/kaini4.png';
import Piece5 from '../images/kaini5.png';
import Piece6 from '../images/kaini6.png';
import Piece7 from '../images/kaini7.png';
import Piece8 from '../images/kaini8.png';
import Piece9 from '../images/kaini9.png';

const ResultPuzzle = ({ pieceId,size }) => {
  // Define the size of each piece (could be dynamic based on viewport)
  const pieceSize = size; // Example fixed size, or use a responsive size

  // Function to get the image source based on pieceId
  const getImageSrc = (id) => {
    switch (id) {
      case 1:
        return Piece1;
      case 2:
        return Piece2;
      case 3:
        return Piece3;
      case 4:
        return Piece4;
      case 5:
        return Piece5;
      case 6:
        return Piece6;
      case 7:
        return Piece7;
      case 8:
        return Piece8;
      case 9:
        return Piece9;
        
      default:
        return null; // or a default image
    }
  };
  // Define a function to get the border radius based on the pieceId
  const getBorderRadius = (id) => {
    switch (id) {
      case 1:
        return '20px 0 0 0'; // Top-left corner rounded
      case 3:
        return '0 20px 0 0'; // Top-right corner rounded
        case 7:
          return '0 0 0 20px'; // Top-left corner rounded
        case 9:
          return '0 0 20px 0'; // Top-right corner rounded
      default:
        return '0'; // No corners rounded
    }
  };
  return (
      <img 
        style={{ width: pieceSize, height: pieceSize 
       ,
       borderRadius: getBorderRadius(pieceId), // Apply border radius conditionally
      }} // Set the size using inline style
        src={getImageSrc(pieceId)} // Set the source dynamically
        alt={`Puzzle Piece ${pieceId}`} // Alt text for accessibility
      />
  );
};

export default ResultPuzzle;
