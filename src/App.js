//Challenge 1 of 2: Fix a request counter

import { useState } from 'react';

export default function RequestTracker() {
  //pending = 0
  const [pending, setPending] = useState(0);
  //completed = 0
  const [completed, setCompleted] = useState(0);
  //이벤트 핸들러
  async function handleClick() {
    setPending(pending + 1); 
    await delay(3000);
    setPending(n => n - 1); 
    setCompleted(n => n + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}
