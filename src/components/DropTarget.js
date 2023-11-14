import React from 'react';
import { useDrop } from 'react-dnd';

const DropTarget = ({ children , id , size, onPiecePlaced}) => {
 
    console.log("drop zone rendered"); // NOT executing

    const [{ isOver,draggedItem }, drop] = useDrop({
        accept: 'piece',
        drop: (item, monitor) => {
            onPiecePlaced(item.id, id); // You might want to pass more info here
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            draggedItem: monitor.getItem(),

        }),
    });

    const getDropZoneStyle = isOver => ({
        width: size,
        height: size,
        position: 'relative',
        backgroundColor: isOver && draggedItem && draggedItem.id === id ?  'lightyellow' : 'transparent',

    });

    return (
        // ref={drop}
        <div ref={drop} style={getDropZoneStyle(isOver)}>
            {/* This area represents where the PuzzlePiece can be dropped */}
            {children}
        </div>
    );
};

export default DropTarget;
