import React from "react";
import DropTarget from "./DropTarget";

// Inside your Puzzle.js or equivalent grid component
const PuzzlesGrid = ({ onPiecePlaced, size }) => {
    // Render the drop targets in a grid layout
    console.log("puzzle grid rendering");
    console.log("puzzle grid size: ",size);

    return (
        <div className='flex' style={{ width: '300px', height: '300px' }}>
            {[...Array(9)].map((_, index) => (
                <DropTarget
                    key={index}
                    id={index + 1}
                    size={size}
                    onPiecePlaced={onPiecePlaced}
                >       
                <p>Drop zone is here</p> 
                </DropTarget>
            ))}
        </div>
    );
};

export default PuzzlesGrid;
