import { useState, useEffect, useRef } from "react";

const useDraggable = ({ initialX = 0, initialY = 0, ref } = {}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [currentX, setCurrentX] = useState(initialX);
  const [currentY, setCurrentY] = useState(initialY);
  const [initialMouseX, setInitialMouseX] = useState(null);
  const [initialMouseY, setInitialMouseY] = useState(null);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault();
        setCurrentX(e.clientX - initialMouseX);
        setCurrentY(e.clientY - initialMouseY);
        setHasMoved(true);
      }
    };

    const onMouseUp = () => {
      setIsDragging(false);
      if (!hasMoved) {
        // console.log("we on ly clicked not moved");
        // Only trigger click event if the element hasn't been moved
        elementRef.current.click();
      }
      setHasMoved(false);
    };

    ref.current.addEventListener("mousemove", onMouseMove);
    ref.current.addEventListener("mouseup", onMouseUp);

    return () => {
      ref.current.removeEventListener("mousemove", onMouseMove);
      ref.current.removeEventListener("mouseup", onMouseUp);
    };
  }, [initialMouseX, initialMouseY, isDragging, hasMoved]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setInitialMouseX(e.clientX - currentX);
    setInitialMouseY(e.clientY - currentY);
  };

  const style = {
    transform: `translate3d(${currentX}px, ${currentY}px, 0)`,
    cursor: isDragging ? "grabbing" : "pointer",
    userSelect: isDragging ? "none" : "auto",
  };

  const elementRef = useRef(null);

  const handleClick = (e) => {
    console.log("cliced", e);
  };

  return {
    style,
    handleMouseDown,
    handleClick,
    elementRef,
  };
};

export default useDraggable;
