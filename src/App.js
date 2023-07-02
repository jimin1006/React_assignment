//Challenge 1 of 4: Complete the gallery
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  //이벤트 핸들러 handlePrevClick() 추가
  function handlePrevClick() {
    if (index >0) {
      setIndex(index - 1);
    }
  }
  //마지막 페이지 전까지만 index 값 증가 
  function handleNextClick() {
    if (index < sculptureList.length - 1 ){
        setIndex(index + 1);
    }
    
}

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button 
        onClick={handlePrevClick}
        disabled={index==0}
        >
        Previous
      </button>
      
      <button 
        onClick={handleNextClick}
        disabled={index == sculptureList.length - 1}
        >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}