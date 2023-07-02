//Challenge 3 of 4: Fix a crash
//스스로 해결 못함
//훅은 컴포넌트 함수의 최상위 레벨에서만 호출이 가능하다
import { useState } from 'react';

export default function FeedbackForm() {
  //useState 훅: isSent는 괜츈
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    // eslint-disable-next-line
    
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
