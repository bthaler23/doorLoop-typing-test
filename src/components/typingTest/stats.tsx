import React from 'react';
import * as Containers from '../containers';
import Typography from '@mui/material/Typography';

export interface IProps {
  typedWords: string[];
  wordBank: string[];
  timeElapsed: number;
}

export default ({ typedWords, wordBank, timeElapsed }: IProps) => {
  const finishedWords = typedWords.filter((word: string) => !!word);
  const wordsPerMinute = (finishedWords.length * (60 / timeElapsed)).toFixed(2)
  const errors = typedWords.filter((word, idx) => word && (word !== wordBank[idx]));
  return (
    <Containers.Row
      elevation={3}
      height='10%'
    >
      <Typography>Words Typed: {finishedWords.length}</Typography>
      <Typography>Words Per Minute: {timeElapsed ? wordsPerMinute : '0'}</Typography>
      <Typography>Errors: {errors.length}</Typography>
    </Containers.Row>
  )
}