// PuzzlePiece.js
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const PuzzlePiece = ({ id, size, x, y, src, onDrag }) => {
    const [position, setPosition] = useState({ x, y }); // Initial position
    const [{ isDragging }, drag] = useDrag({
        type: 'piece',
        item: () => {
            onDrag(id);
            return { id, size, initialPosition: position };
        },
        end: (item, monitor) => {
            // Call onDrag with null when the drag operation ends
            onDrag(null);

            const dropResult = monitor.getDropResult();
            if (dropResult) {
                const delta = monitor.getDifferenceFromInitialOffset();
                if (delta) {
                    const newPosition = {
                        x: Math.round(item.initialPosition.x + delta.x),
                        y: Math.round(item.initialPosition.y + delta.y),
                    };
                    setPosition(newPosition); // Update position state
                }
            }
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, width: size, height: size }}>
            <img src={src} />
        </div>
    );
};

export default PuzzlePiece;
