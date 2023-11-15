import React from 'react';
import { useDrop } from 'react-dnd';

const DropTarget = ({ children , id , size, onPiecePlaced,onclick}) => {
 
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
    const getBorderRadius = (id) => {
        switch (id) {
          case 1:
            return '15px 0 0 0'; // Top-left corner rounded
          case 3:
            return '0 15px 0 0'; // Top-right corner rounded
            case 7:
              return '0 0 0 15px'; // Top-left corner rounded
            case 9:
              return '0 0 15px 0'; // Top-right corner rounded
          default:
            return '0'; // No corners rounded
        }
      };
    const getDropZoneStyle = isOver => ({
        width: size,
        height: size,
        position: 'relative',
        backgroundColor: isOver && draggedItem && draggedItem.id === id ?  'yellow' : '#f2ffe6',
        borderRadius: getBorderRadius(id),
    });

    return (
        // ref={drop}
        <button ref={drop} style={getDropZoneStyle(isOver) } onClick={()=>{onclick(id)}}>
            {/* This area represents where the PuzzlePiece can be dropped */}
            {children}
        </button>
    );
};

export default DropTarget;
