import React from 'react';
import PuzzlePiece from './PuzzlePiece';
 
const Puzzle = ({ onDrag, correctPlacements ,size}) => {
  const pieceSize = size-4; // Example fixed size
  const pieceIds = [1, 8, 6, 4, 9, 3, 2, 7, 5]; // Array of piece IDs
  const boxSize = 3*pieceSize+8;
  return (
    <div className="grid grid-cols-3 gap-1 items-center justify-center " style={{height:boxSize, width:boxSize}}>
      {pieceIds.map((pieceId, index) => {
        const isPlaced = correctPlacements[pieceId];

        // Only render the piece if it has not been correctly placed
        if (!isPlaced) {
          return (
            <PuzzlePiece
              key={pieceId}
              id={pieceId}
              size={pieceSize}
            />
          );
        }

        // Return null or an empty div for placed pieces
        return <div key={pieceId} style={{ width: pieceSize, height: pieceSize }} />;
      })}
    </div>
  );
};

export default Puzzle;
