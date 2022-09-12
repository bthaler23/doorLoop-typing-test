import React from 'react';
import { TypingTest } from 'components'
import { wordBank } from './utils/constants';

function App() {
  const shuffledWordBank = wordBank
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
 
  return (
    <div>
      <TypingTest wordBank={shuffledWordBank} />
    </div>
  );
}

export default App;
