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
import Reload from './images/reload.png';
import notes from './images/notes.png';
import { isMobile } from 'react-device-detect'; // or use your own mobile detection

// const HTML5toTouch = {
//   backends: [
//     {
//       backend: HTML5Backend,
//       transition: MouseTransition,
//     },
//     {
//       backend: TouchBackend, // You may want to pass options to TouchBackend
//       options: { enableMouseEvents: true }, // Enable if you want to respond to mouse events
//       preview: true,
//       transition: TouchTransition,
//     },
//   ],
// };
// const backend = HTML5Backend;

const backend = isMobile ? TouchBackend : HTML5Backend;
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
  }

  const checkAndShowStoryPanel = (panelId) => {
    //if the id has been correctly placed, show the story panel
    if (correctPlacements[panelId]) {
      showStoryPanel(panelId);
    } else {
      console.log("want to showing story panel:", panelId);
      console.log("checked correctly placed:", correctPlacements[panelId]);
    }
  }
  // const size = 100;

  const size = isMobile? 100:130;
  const closePanel = () => {
    setCurrentPanel(null);
    console.log("current panel:", currentPanel);
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
        <div className='md:max-w-5xl'>
          <h1 className="text-4xl italic font-handlee md:text-5xl font-bold text-gray-800 my-6">
            Hello friend, I'm Kaini!
          </h1 ></div></div>
      <div className="flex items-center justify-center bg-lime-250 bg-opacity-30 p-8">
        <div className='md:max-w-5xl'>
          <h3 className=" text-center text-2xl md:text-3xl text-gray-800 my-4">
            My stories are behind the puzzles:</h3>
          {!isCompleted ? (
            <p className='text-customgreen font-bold'>drag & drop</p>) : (
            <button
              className=" text-gray w-6 h-6"
              onClick={resetGame}>
              <img src={Reload} className='w-6 h-6 opacity-25 mx-auto' />
            </button>
          )}
                        <DndProvider backend={backend}>

          <div className='mx-auto rounded-md md:flex items-center justify-center'>
          {!isCompleted && 
            <div className="flex flex-1 p-4 justify-center items-center">

                  <Puzzle size={size} onDrag={onDrag} correctPlacements={correctPlacements} />
            </div>}
            <div className="flex flex-1 p-4 justify-center items-center">
              {/* <DndProvider backend={backend}> */}
                <PuzzlesGrid onPiecePlaced={onPiecePlaced} size={size} correctPlacements={correctPlacements} onclick={checkAndShowStoryPanel} />
              {/* </DndProvider> */}
            </div>
            {currentPanel && <StoryPanel panelId={currentPanel} closePanel={closePanel} />}
          </div>
          </DndProvider>

        </div>
      </div>
      <div className="text-center py-12 px-2 bg-customlime">
        <h3 className="text-2xl md:text-3xl text-gray-800 mt-4 mb-6">
          My personality is a mix like the wordcloud:
        </h3>
        <MyWordCloud />
        <div className='md:max-w-5xl mt-16 md:flex items-center justify-center  mx-auto'>
          <div className='w-2/3 md:w-2/5 h-32 my-3 py-3 px-8 rounded-sm shadow-md bg-white opacity-90 mx-auto md:mr-2 opacity-70'>
            <h1 className='font-bold text-gray-800'>Strength</h1>
            <p className='text-sm mt-2'>Keep a clear mind under stress, especially handling logic and numbers</p>
          </div>
          <div className='w-2/3 md:w-2/5 h-32 my-3 py-3 px-8 rounded-sm shadow-md bg-white opacity-90 mx-auto md:ml-2 opacity-70'>
            <h1 className='font-bold text-gray-800'>Weakness</h1>
            <p className='text-sm mt-2'>I perfer to build relationships that last, not a social butterfly with many casual friends.</p>
          </div>
        </div>
      </div>
      <div className=" py-8 px-2">
        <div className='flex items-center justify-center'>
          <img src={notes} className='w-12 h-12 mr-4' />
          <h3 className="text-2xl md:text-3xl text-gray-800 mt-6 mb-8">
            My interests include:
          </h3>
        </div>
        <MyInterests />
      </div>
      <div className="flex items-center justify-center bg-lime-300 bg-opacity-35 p-8">
        <div className='text-center p-4 md:max-w-5xl mx-4'>
          <h3 className="italic font-handlee text-4xl md:text-5xl font-semibold text-gray-800 mt-2 mb-4">
            Much appreciated for your time and effort to know me more!
          </h3>
          <h3 className="italic font-handlee text-4xl md:text-5xl font-semibold text-gray-800 mt-2 mb-4">
            Cheers!
          </h3>
        </div>
      </div>
      <div className='w-full md:flex items-center justify-center  py-4 px-8 bg-black'>
        <p className='text-xl text-white mx-auto my-1 md:mr-2 font-semibold'>Designed by Kaini Chang</p>
        <p className='text-xl text-white mx-auto my-1 md:ml-2  font-semibold'>Developed by Kaini Chang</p>
      </div>
    </div>
  );
}

export default App;
{/* <DndProvider backend={HTML5Backend} > */ }