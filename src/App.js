import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Puzzle from './components/Puzzle';
import StoryPanel from './components/StoryPanel';
import { DndProvider } from 'react-dnd';
import { MultiBackend } from 'react-dnd-multi-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { TouchTransition, MouseTransition } from 'react-dnd-multi-backend';
import PuzzlesGrid from './components/PuzzlesGrid';

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      backend: TouchBackend, // You may want to pass options to TouchBackend
      options: { enableMouseEvents: true }, // Enable if you want to respond to mouse events
      preview: true,
      transition: TouchTransition,
    },
  ],
};

function App() {

  const [currentPanel, setCurrentPanel] = React.useState("1");
  const [draggedPiece, setDraggedPiece] = useState(null);
  // State to track the correct placement of puzzle pieces
  const [correctPlacements, setCorrectPlacements] = useState([]);
  // Call this function when a piece is correctly placed
  const showStoryPanel = (panelId) => {
    setCurrentPanel(panelId);
  };
  const size = '100px';
  const closePanel = () => {
    setCurrentPanel(null);
  }
  const onDrag = (pieceId) => {
    setDraggedPiece(pieceId);
  }
  console.log("dragged and placed correctly", currentPanel);

  // Function to call when a piece is dropped
  const onPiecePlaced = (pieceId, zoneId) => {
    if (pieceId === zoneId) {
      // Update the state to reflect the correct placement
      setCorrectPlacements(prev => ({
        ...prev,
        [pieceId]: true,
      }));    // Prepare the panel content based on the pieceId or zoneId
      const content = `You have correctly placed piece ${pieceId}!`;
      console.log(content);
      // Show the story panel
      showStoryPanel(pieceId);
    }
  };

  return (
    <div className="App">
      <p>
        Hope you enjoy puzzles like me do!
      </p>
      {/* <DndProvider backend={MultiBackend} options={HTML5toTouch}> */}

      <DndProvider backend={HTML5Backend} >
        <Puzzle onDrag={onDrag} />

        <PuzzlesGrid onPiecePlaced={onPiecePlaced} size={size} />
      </DndProvider>

      {currentPanel && <StoryPanel panelId={currentPanel} close={closePanel} />}
    </div>
  );
}

export default App;
  // useEffect(() => {
  //   console.log("use effect called");
  //   setCurrentPanel(showStoryPanel);
  // }, [currentPanel]);
  

  // This would be based on your game's logic and how you define the correct position
  // const getCorrectPositionForPiece = (pieceId) => {
  //   // Assuming pieceId is a 1-indexed integer from 1 to 9
  //   const gridSize = 3; // Since it's a 3x3 grid
  //   const pieceSize = 100; // Width and height of each piece
  //   const row = Math.floor((pieceId - 1) / gridSize); // Calculate the row of the piece
  //   const col = (pieceId - 1) % gridSize; // Calculate the column of the piece

  //   // Calculate the x and y position based on the row and column
  //   const x = col * pieceSize;
  //   const y = row * pieceSize;

  //   return { x, y };
  // };