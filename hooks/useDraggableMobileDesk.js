import { useState, useEffect, useRef } from "react";

const useDraggableMobileDesktop = ({ initialX = 0, initialY = 0, ref } = {}) => {
  const [startedDrag, setStartedDrag] = useState(false);
  const [currentX, setCurrentX] = useState(initialX);
  const [currentY, setCurrentY] = useState(initialY);
  const [initialMouseX, setInitialMouseX] = useState(null);
  const [initialMouseY, setInitialMouseY] = useState(null);
  const [hasMoved, setHasMoved] = useState(false);
  const [handleMouseDown, setHandleMouseDown] = useState(() => (e) => {
    //    Mouse down indicates start drag!!!
    console.log("desktop drag started...");
    e.preventDefault();
    setStartedDrag(true);
    setInitialMouseX(e.clientX - currentX);
    setInitialMouseY(e.clientY - currentY);
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      console.log("mouse move");
      if (startedDrag) {
        e.preventDefault();
        setCurrentX(e.clientX - initialMouseX);
        setCurrentY(e.clientY - initialMouseY);
        setHasMoved(true);
      }
    };

    const onMouseUp = (e) => {
      console.log("mouse up", e.type, hasMoved, !hasMoved);

      setStartedDrag(false);
      //   This condition represents a click and not a drag motion
      if (!hasMoved && startedDrag) {
        elementRef.current.click();
        console.log("not moved");
      }
      setHasMoved(false);
    };

    const onTouchMove = (e) => {
      if (startedDrag) {
        e.preventDefault();
        setCurrentX(e.touches[0].clientX - initialMouseX);
        setCurrentY(e.touches[0].clientY - initialMouseY);
        setHasMoved(true);
      }
    };

    const onTouchEnd = (e) => {
      console.log("tocuhe end mobile", startedDrag, hasMoved);
      setStartedDrag(false);
      //   This condition represents a click and not a drag motion
      if (!hasMoved && startedDrag) {
        elementRef.current.click();
        console.log("not moved");
      }
      setHasMoved(false);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: false });
    document.addEventListener("mouseup", onMouseUp, { passive: false });
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd, { passive: false });

    // Remove mouse event on mobile to prevent double clicks
    if ("ontouchstart" in document.documentElement) {
      // Disable all mouse-related event handlers
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      ref.current.removeEventListener("mousedown", handleMouseDown);
      setHandleMouseDown(null);
      //   console.log("ref current is", ref.current);
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove, { passive: false });
      document.removeEventListener("mouseup", onMouseUp, { passive: false });
      document.removeEventListener("touchmove", onTouchMove, { passive: false });
      document.removeEventListener("touchend", onTouchEnd, { passive: false });
      //   ref.current.removeEventListener("mousedown", handleMouseDown);
    };
  }, [initialMouseX, initialMouseY, startedDrag, hasMoved]);

  useEffect(() => {
    console.log("started drag, or/and has moved change", startedDrag, hasMoved);
  }, [startedDrag, hasMoved]);

  //   const handleMouseDown = (e) => {
  //     //    Mouse down indicates start drag!!!
  //     console.log("desktop drag started");
  //     e.preventDefault();
  //     setStartedDrag(true);
  //     setInitialMouseX(e.clientX - currentX);
  //     setInitialMouseY(e.clientY - currentY);
  //   };

  const handleTouchStart = (e) => {
    console.log("drag sartd mobile");
    e.preventDefault();
    setStartedDrag(true);
    setInitialMouseX(e.touches[0].clientX - currentX);
    setInitialMouseY(e.touches[0].clientY - currentY);
  };

  const style = {
    transform: `translate3d(${currentX}px, ${currentY}px, 0)`,
    cursor: startedDrag && hasMoved ? "grabbing" : "pointer",
    userSelect: startedDrag && hasMoved ? "none" : "auto",
  };

  const elementRef = useRef(null);

  const handleClick = (e) => {
    console.log("clicked", e);
  };

  return {
    style,
    handleMouseDown,
    handleTouchStart,
    handleClick,
    elementRef,
  };
};

export default useDraggableMobileDesktop;
