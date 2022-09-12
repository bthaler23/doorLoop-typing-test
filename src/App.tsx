import React from 'react';
import { TypingTest, Containers, Header } from 'components'
import CssBaseline from '@mui/material/CssBaseline';

import { wordBank } from './utils/constants';

function App() {
  const shuffledWordBank = wordBank
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return (
      <Containers.Page>
        <Header />
        <CssBaseline />
        <TypingTest wordBank={shuffledWordBank} />
      </Containers.Page>
  );
}

export default App;
