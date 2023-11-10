import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Puzzle from './components/Puzzle';
import StoryPanel from './components/StoryPanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {

  const [currentPanel, setCurrentPanel] = React.useState("1");
  const [draggedPiece, setDraggedPiece] = useState(null);

  // Call this function when a piece is correctly placed
  const showStoryPanel = (panelId) => {
    setCurrentPanel(panelId);
  };
  const closePanel = () => {
    setCurrentPanel(null);
  }
  const onDrag = (pieceId) => {
    setDraggedPiece(pieceId);
  }
  console.log("dragged and placed correctly",currentPanel);

  // This would be based on your game's logic and how you define the correct position
  const getCorrectPositionForPiece = (pieceId) => {
    // Assuming pieceId is a 1-indexed integer from 1 to 9
    const gridSize = 3; // Since it's a 3x3 grid
    const pieceSize = 100; // Width and height of each piece
    const row = Math.floor((pieceId - 1) / gridSize); // Calculate the row of the piece
    const col = (pieceId - 1) % gridSize; // Calculate the column of the piece

    // Calculate the x and y position based on the row and column
    const x = col * pieceSize;
    const y = row * pieceSize;

    return { x, y };
  };

  return (
    <div className="App">
      <p>
        Hope you enjoy puzzles like me do!
      </p>
      <DndProvider backend={HTML5Backend}>
        <Puzzle onCorrectPlacement={showStoryPanel} onDrag={onDrag} getCorrectPositionForPiece={getCorrectPositionForPiece} />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pieceId) => {
          const targetStyle = draggedPiece === pieceId ? 'highlighted' : '';
          const correctPos = getCorrectPositionForPiece(pieceId);

          return (
            <div
              key={pieceId}
              className={`target-area ${targetStyle}`} // Apply the 'highlighted' class conditionally
              style={{
                width: '100px',
                height: '100px',
                left: `${correctPos.x}px`, // Set left position
                top: `${correctPos.y}px`, // Set top position
                position: 'absolute',
              }}
            >
              {/* Render the puzzle piece if it's not being dragged
        {correctPlacements.includes(pieceId) && <img src={Piece1} alt={`Piece ${pieceId}`} />}
       */}
            </div>
          );
        })}
      </DndProvider>
      {currentPanel && <StoryPanel panelId={currentPanel} close={closePanel} />}
    </div>
  );
}

export default App;
