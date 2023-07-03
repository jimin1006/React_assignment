//Challenge 3 of 3: Update an object with Immer
//세터함수 -> updateShape, updateShape 내부에 draft를 인자로 받아 변경
import { useState } from 'react';
import { useImmer } from 'use-immer';
import Background from './Background.js';
import Box from './Box.js';

const initialPosition = {
  x: 0,
  y: 0
};
//setShape -> updateShape
export default function Canvas() {
  const [shape, updateShape] = useImmer({
    color: 'orange',
    position: initialPosition 
  });
  
  function handleMove(dx, dy) {
    updateShape(draft =>{
      //이렇게 작성하면 안 됨.. 왜 안 되지?
      // draft.position.x = shape.position.x + dx,
      // draft.position.y = shape.position.y + dy
      draft.position.x += dx;
      draft.position.y += dy;
    });
  }

  function handleColorChange(e) {
    updateShape(draft => {
      draft.color = e.target.value;
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}