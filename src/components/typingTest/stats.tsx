import React from 'react';
import * as Containers from '../containers';
import Typography from '@mui/material/Typography';

export interface IProps {
  typedWords: string[];
  wordBank: string[];
  currentWordIdx: number;
  timeElapsed: number;
}

export default ({ typedWords, wordBank, timeElapsed, currentWordIdx }: IProps) => {
  const finishedWords = typedWords.filter((word: string, idx: number) => !!word && idx !== currentWordIdx);
  const wordsPerMinute = (finishedWords.length * (60 / timeElapsed)).toFixed(2)
  const errors = finishedWords.filter((word, idx) => word && (word !== wordBank[idx]));
  return (
    <Containers.Row
      elevation={3}
      height='10%'
    >
      <Typography>Words Typed: {finishedWords.length}</Typography>
      <Typography>Words Per Minute: {timeElapsed ? wordsPerMinute : '0'}</Typography>
      <Typography color='error'>Errors: {errors.length}</Typography>
    </Containers.Row>
  )
}