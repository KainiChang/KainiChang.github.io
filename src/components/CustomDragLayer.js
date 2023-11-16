import { useDragLayer } from "react-dnd";
const CustomDragLayer = () => {
  const {
    isDragging,
    item,
    currentOffset,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging || !currentOffset) return null;

  const transform = `translate(${currentOffset.x}px, ${currentOffset.y}px)`;
  return (
    <div style={{ position: 'fixed', pointerEvents: 'none', zIndex: 100, left: 0, top: 0, right: 0, bottom: 0 }}>
      <div style={{ transform, WebkitTransform: transform }}>
        {/* Render a preview of the dragging item */}
        <div className='flex items-center justify-center' style={{ width: '100px', height: '100px', borderRadius: item.radius, backgroundImage: `url(${item.image})`,   backgroundSize: 'cover',
}}>
          <p className="text-slate-500 text-xl mx-auto my-auto">+</p>        </div>
      </div>
    </div>
  );
};

export default CustomDragLayer;