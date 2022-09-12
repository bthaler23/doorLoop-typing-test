import React from 'react';

export interface IProps {
  typedWords: string[];
  wordBank: string[];
  timeElapsed: number;
}

export default ({ typedWords, wordBank, timeElapsed }: IProps) => {
  const finishedWords = typedWords.filter((word: string) => !!word);
  const wordsPerMinute = (finishedWords.length * (60 / timeElapsed )).toFixed(2)
  const errors = typedWords.filter((word, idx) => word && (word !== wordBank[idx]));
  return (
    <div>
      <span>Words Typed: {finishedWords.length}</span>
      <span>Words Per Minute: {timeElapsed ? wordsPerMinute : '0'}</span>
      <span>Errors: {errors.length}</span>
    </div>
  )
}