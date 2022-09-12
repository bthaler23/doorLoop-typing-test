import React from 'react';
import { TypingTest } from './components'
import { wordBank } from './utils/constants';

function App() {
  return (
    <div>
      <TypingTest wordBank={wordBank} />
    </div>
  );
}

export default App;
