// // PuzzlePiece.js
// import React, { useState } from 'react';
// import { useDrag } from 'react-dnd';
// import ResultPuzzle from './ResultPuzzle';

// const PuzzlePiece = ({ id, size, x, y, onDrag }) => {
//     const [position, setPosition] = useState({ x, y }); // Initial position
//     const [{ isDragging }, drag] = useDrag({
//         type: 'piece',
//         item: () => {
//             onDrag(id);
//             return { id, size, initialPosition: position };
//         },
//         end: (item, monitor) => {
//             // Call onDrag with null when the drag operation ends
//             onDrag(null);

//             const dropResult = monitor.getDropResult();
//             if (dropResult) {
//                 const delta = monitor.getDifferenceFromInitialOffset();
//                 if (delta) {
//                     const newPosition = {
//                         x: Math.round(item.initialPosition.x + delta.x),
//                         y: Math.round(item.initialPosition.y + delta.y),
//                     };
//                     setPosition(newPosition); // Update position state
//                 }
//             }
//         },
//         collect: monitor => ({
//             isDragging: !!monitor.isDragging(),
//         }),
//     });
//     const handleTouchMove = (e) => {
//         const touch = e.targetTouches[0];
//         // Calculate the position based on touch point
//         const newPosition = {
//             x: Math.round(touch.clientX),
//             y: Math.round(touch.clientY),
//         };
//         // Update the position state
//         setPosition(newPosition);
//     };
    
//     return (
//         <div ref={drag}   onTouchMove={handleTouchMove}
//          style={{ opacity: isDragging ? 0.5 : 1, width: size, height: size }}>
//             <ResultPuzzle pieceId={id} size={size} />
//         </div>
//     );
// };

// export default PuzzlePiece;


import React from 'react';
import { useDrag } from 'react-dnd';
import ResultPuzzle from './ResultPuzzle';

const PuzzlePiece = ({ id, size, onDrag }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'piece',
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    // The component's style accounts for whether it is currently being dragged
    const style = {
        opacity: isDragging ? 0.5 : 1,
        width: size,
        height: size,
    };

    return (
        <div ref={drag} style={style}>
            <ResultPuzzle pieceId={id} size={size} />
        </div>
    );
};


export default PuzzlePiece;
