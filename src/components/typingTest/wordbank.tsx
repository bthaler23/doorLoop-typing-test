import React from 'react';
import * as Containers from '../containers';
import * as Styled from './styles';

export interface IProps {
  typedWords: string[];
  currentWordIdx: number;
  wordBank: string[];
}

export default ({ typedWords, currentWordIdx, wordBank }: IProps) => {
  const currentSpelling = typedWords[currentWordIdx];

  const words = wordBank.map((word, idx) => {
    if (currentWordIdx === idx) {
      return (
        <Styled.Word variant='h5' highlighted='true' key={idx}>
          <SpellCheckedWord currentSpelling={currentSpelling} currentWord={word} />
        </Styled.Word>
      )
    } else {
      let color = '';
      if (typedWords[idx]) {
        color = typedWords[idx] === word ? 'green' : 'red'
      }
      return (
        <Styled.Word
          variant='h5' 
          key={idx}
          color={color}
        >
          {word}
        </Styled.Word>
      )
    }
  })
  const sliceStart = Math.floor(currentWordIdx / 30) * 30;
  return (
    <Styled.WordBankContainer
      variant='outlined'
    >
      {words.slice(sliceStart, sliceStart + 30)}
    </Styled.WordBankContainer>
  )

}

const SpellCheckedWord = ({ currentSpelling, currentWord }: any) => {
  return currentWord.split('').map((char: string, idx: number) => {
    const typedChar = currentSpelling[idx]
    if (typedChar) {
      if (typedChar === char) {
        return <Styled.CorrectSpelling key={idx}>{char}</Styled.CorrectSpelling>
      } else {
        return <Styled.WrongSpelling key={idx}>{char}</Styled.WrongSpelling>
      }
    } else {
      return <span key={idx}>{char}</span>;
    }
  })
}