import React, { useState, useEffect } from 'react';
import './App.css';
import Puzzle from './components/Puzzle';
import StoryPanel from './components/StoryPanel';
import { DndProvider } from 'react-dnd';
import { MultiBackend } from 'react-dnd-multi-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { TouchTransition, MouseTransition } from 'react-dnd-multi-backend';
import PuzzlesGrid from './components/PuzzlesGrid';
import MyWordCloud from './components/MyWordCloud';
import MyInterests from './components/MyInterests';
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

  const [currentPanel, setCurrentPanel] = React.useState(null);
  const [draggedPiece, setDraggedPiece] = useState(null);
  // State to track the correct placement of puzzle pieces
  const [correctPlacements, setCorrectPlacements] = useState(
    {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false
    });
  // Call this function when a piece is correctly placed
  const showStoryPanel = (panelId) => {
    setCurrentPanel(panelId);
  };
  const size = '130px';
  const closePanel = () => {
    setCurrentPanel(null);
  }
  const onDrag = (pieceId) => {
    setDraggedPiece(pieceId);
  }
  console.log("dragged and placed correctly", currentPanel);
  const resetGame = () => {
    setCorrectPlacements({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false
    });
  }
  const isCompleted = Object.values(correctPlacements).every(value => value);

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
      <div className="flex items-center justify-center bg-lime-300 bg-opacity-35 p-8">
        <div className='text-center p-4 md:max-w-5xl mx-4'>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
            Hello friend, I'm Kaini! A happy life boxer!
          </h1 >
          <h3 className="text-2xl md:text-3xl  italic text-gray-600 mt-2 mb-4">
            Thank you for taking the time to delve into my story.<br /> Our meeting here, even in the digital realm,<br />may seem like a chance encounter at this intersection,<br /> but beneath the surface, we are more than meets the eye.
          </h3>
          <p className='mt-2 mb-4'>
            By placing every puzzle, a story of me will be presented!
          </p>
          <div className='mx-auto bg-white p-5 rounded-md md:flex items-center justify-center'>
            <div className="flex flex-1 p-4 justify-center items-center">
              <DndProvider backend={MultiBackend} options={HTML5toTouch}>
                {!isCompleted ? (
                  <Puzzle onDrag={onDrag} correctPlacements={correctPlacements} />) : (
                  <button
                    className="bg-white text-gray w-96 h-96  py-2 px-4 rounded"
                    onClick={resetGame}
                  >
                    Click to replay
                  </button>
                )}
              </DndProvider>
            </div>
            <div className="flex flex-1 p-4 justify-center items-center">
              <DndProvider backend={MultiBackend} options={HTML5toTouch}>
                <PuzzlesGrid onPiecePlaced={onPiecePlaced} size={size} correctPlacements={correctPlacements} />
              </DndProvider>
            </div>
            {currentPanel && <StoryPanel panelId={currentPanel} close={closePanel} />}
          </div>
        </div>
      </div>
      <div className="items-center justify-center p-8 bg-white bg-opacity-55">
        <h3 className="text-2xl md:text-3xl   text-gray-800 mt-2 mb-4">
          My personality is a mix of the following:
        </h3>
        <MyWordCloud className="md:max-w-5xl items-center justify-center" />
      </div>
      <div className="items-center justify-center p-8 bg-orange-100 bg-opacity-35">
        <h3 className="text-2xl md:text-3xl  text-gray-800 mt-2 mb-4">
          My interests including:
        </h3>
        <p className="  mt-2 mb-4">
          ordered by favourate level    
          </p>
        <MyInterests />
      </div>
      <div className="flex items-center justify-center bg-lime-300 bg-opacity-35 p-8">
        <div className='text-center p-4 md:max-w-5xl mx-4'>
          <h3 className="text-3xl md:text-4xl  italic text-gray-600 mt-2 mb-4">
          Much appreciated for your time and effort to know me more!
          </h3>
          <h3 className="text-3xl md:text-4xl  italic text-gray-600 mt-2 mb-4">
Cheers!          </h3>
          </div>
          </div>
    </div>
  );
}

export default App;
{/* <DndProvider backend={HTML5Backend} > */ }
