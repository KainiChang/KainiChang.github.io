import React from "react";
import DropTarget from "./DropTarget";
import PuzzlePiece from "./PuzzlePiece";
import ResultPuzzle from "./ResultPuzzle";

// Inside your Puzzle.js or equivalent grid component
const PuzzlesGrid = ({ onPiecePlaced, size, onclick,correctPlacements,array }) => {
 const boxSize = 3*size;
    return (
        <div className='grid grid-cols-3 mt-3' style={{ width: boxSize, height: boxSize }}>
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
                    onclick={onclick}
                >
                    {isPlaced ?
                        <ResultPuzzle pieceId={pieceId}/> :
                        <p className="flex justify-center items-center h-full m-0 text-slate-400 text-xl">+</p>
                    }
                </DropTarget>
            )})}
        </div>
    );
};

export default PuzzlesGrid;
