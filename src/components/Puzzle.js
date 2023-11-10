// Puzzle.js
import React, { useState } from 'react';
import PuzzlePiece from './PuzzlePiece';
import Piece1 from '../images/kaini.jpg';

const Puzzle = ({ onCorrectPlacement ,onDrag,getCorrectPositionForPiece}) => {
  // State to track the correct placement of puzzle pieces
  const [correctPlacements, setCorrectPlacements] = useState([]);

  // Define the size of each piece (could be dynamic based on viewport)
  const pieceSize = 100; // Example fixed size, or use a responsive size

  // Function to call when a piece is dropped
  const onPiecePlaced = (pieceId, droppedPosition) => {
    // Determine the correct position for this piece
    const correctPosition = getCorrectPositionForPiece(pieceId);

    // Define a threshold for how close the piece needs to be to the correct position
    const threshold = 200; // pixels, adjust as needed

    // Compare droppedPosition with correctPosition within the threshold range
    const isXCorrect = Math.abs(droppedPosition.x - correctPosition.x) <= threshold;
    const isYCorrect = Math.abs(droppedPosition.y - correctPosition.y) <= threshold;

    if (isXCorrect && isYCorrect) {
      // Update the state to include this piece as correctly placed
      setCorrectPlacements(prev => [...prev, pieceId]);
      console.log("correctPlacements: ",pieceId);
      // Show the corresponding story panel
      onCorrectPlacement(pieceId);
    }
  };

  return (
    <div className="puzzle-container">
      <PuzzlePiece
        key={1}
        id={1}
        size={100}
        x={0}
        y={0}
        onDropPiece={onPiecePlaced}
        src={Piece1}
        onDrag={onDrag}
      />

      <PuzzlePiece
        key={2}
        id={2}
        size={100}
        src={Piece1}
        x={100}
        y={0}
        onDropPiece={onPiecePlaced}
        onDrag={onDrag}
      />
      <PuzzlePiece
        key={3}
        id={3}
        size={100}
        src={Piece1}
        x={200}
        y={0}
        onDropPiece={onPiecePlaced} 
        onDrag={onDrag}/>

      <PuzzlePiece
        key={4}
        id={4}
        size={100}
        src={Piece1}
        x={300}
        y={0}
        onDropPiece={onPiecePlaced}
        onDrag={onDrag}
        />
      <PuzzlePiece
        key={5}
        id={5}
        size={100}
        src={Piece1}
        x={400}
        y={0}
        onDropPiece={onPiecePlaced}
        onDrag={onDrag}
        />
      <PuzzlePiece
        key={6}
        id={6}
        size={100}
        src={Piece1}
        x={500}
        y={0}
        onDropPiece={onPiecePlaced}
        onDrag={onDrag}
        />
      <PuzzlePiece
        key={7}
        id={7}
        size={100}
        src={Piece1}
        x={600}
        y={0}
        onDropPiece={onPiecePlaced}
        onDrag={onDrag}
        />
      <PuzzlePiece
        key={8}
        id={8}
        size={100}
        src={Piece1}
        x={700}
        y={0}
        onDropPiece={onPiecePlaced}
        onDrag={onDrag}
        />
      <PuzzlePiece
        key={9}
        id={9}
        size={100}
        src={Piece1}
        x={800}
        onDropPiece={onPiecePlaced} 
        onDrag={onDrag}
        />
    </div>
  );
};

export default Puzzle;
