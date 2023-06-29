import React from 'react';
import { AppContext } from './App';

function Component() {

  return (
    <AppContext.Consumer>
      {meal => (
        <h2>{meal.name} - {meal.price}원</h2>
      )}
    </AppContext.Consumer>
  );
};

export default Component;