//Challenge 2 of 4: Fix stuck form inputs
import {useState} from 'react';

export default function Form() { 
  //state 변수 선언
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
//이벤트 핸들러 
  function handleFirstNameChange(e) {
     setFirstName(e.target.value);
 
  }
//이벤트 핸들러
  function handleLastNameChange(e) {
    setlastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setlastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}