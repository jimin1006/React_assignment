//Challenge 4 of 4: Remove unnecessary state
//state를 삭제하라는 힌트 없었으면 해결 못했을듯
//렌더링이 한 번밖에 일어나지 않아서 state 대신 일반변수로 고정하는듯
import { useState } from 'react';

export default function FeedbackForm() {
  let name= '';

  function handleClick() {
    name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}