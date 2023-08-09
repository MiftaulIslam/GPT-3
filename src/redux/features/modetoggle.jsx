import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Draggable from 'react-draggable';
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs';
import './modetoggle.css';
import { modeToggle } from './darkwhiteToggleSlice';

const Modetoggle = () => {
  const mode = useSelector(state => state.modetogging.mode);
  const dispatch = useDispatch();
  const draggableRef = useRef(null);
  const [hasDragged, setHasDragged] = useState(false);

  const handleDrag = () => {setHasDragged(true)};

  const handleDragStop = () => {
    setTimeout(() => {
      setHasDragged(false);
    }, 0);};

  const handleClick = () => {
    if (!hasDragged) {
      if (mode === 'dark') {dispatch(modeToggle('light'));} else {dispatch(modeToggle('dark'));}
    }
  };

  return (
    <Draggable nodeRef={draggableRef} onDrag={handleDrag} onStop={handleDragStop}>
      <div className="modetoggle_primary" onClick={handleClick} ref={draggableRef}>
        {mode === 'dark' 
        ? (
          <div className="darkmode_icon">
            <BsSunFill />
          </div>) 
        : (
          <div className="lightmode_icon">
            <BsFillMoonFill />
          </div>)}</div>
    </Draggable>
  );
};

export default Modetoggle;
