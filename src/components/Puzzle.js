import React from 'react';
import PuzzlePiece from './PuzzlePiece';
 
const Puzzle = ({ onDrag, correctPlacements ,size}) => {
  const pieceSize = size; // Example fixed size
  const pieceIds = [1, 8, 6, 4, 9, 3, 2, 7, 5]; // Array of piece IDs
  const boxSize = 3*pieceSize;
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
              x={pieceSize * (index % 3)}
              y={pieceSize * Math.floor(index / 3)}
              image={get}
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
