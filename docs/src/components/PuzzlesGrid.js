import React from "react";
import DropTarget from "./DropTarget";
import PuzzlePiece from "./PuzzlePiece";
import ResultPuzzle from "./ResultPuzzle";

// Inside your Puzzle.js or equivalent grid component
const PuzzlesGrid = ({ onPiecePlaced, size,correctPlacements }) => {
    // Render the drop targets in a grid layout
    console.log("puzzle grid rendering");
    console.log("puzzle grid size: ", size);

    return (
        <div className='grid grid-cols-3 border-double border-2 ' style={{ width: '390px', height: '390px' }}>
            {
            [...Array(9)].map((_, index) => {
                const pieceId = index + 1;
                const isPlaced = correctPlacements[pieceId];
                return(
                <DropTarget
                    key={index}
                    id={index + 1}
                    size={size}
                    onPiecePlaced={onPiecePlaced}
                >
                    {isPlaced ?
                        <ResultPuzzle pieceId={pieceId}/> :
                        <p className="flex justify-center items-center h-full m-0 text-slate-400">+</p>
                    }
                </DropTarget>
            )})}
        </div>
    );
};

export default PuzzlesGrid;