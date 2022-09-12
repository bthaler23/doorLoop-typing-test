import React, { useEffect, useState, ChangeEvent, } from 'react';
import * as Containers from './containers';
import { EKeyCodes } from '../interfaces';

export interface IProps {
  wordBank: string[];
  timer?: number;
}

export default ({ wordBank = [], timer = 60 }: IProps) => {
  const emptyTypedWords = wordBank.map(() => '');
  const [countdown, updateCountdown] = React.useState(timer);
  const [currentWordIdx, updateCurrentWordIdx] = React.useState(0);
  const [typedWords, updateTypedWords] = React.useState<string[]>(emptyTypedWords);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newTypedWords = [...typedWords];
    newTypedWords[currentWordIdx] = event.target.value;
    updateTypedWords(newTypedWords);
  };

  const handleWordNavigation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const currentSpelling = typedWords[currentWordIdx];
    if (event.code === EKeyCodes.Backspace) {
      if (currentWordIdx > 0 && !currentSpelling.length) {
        updateCurrentWordIdx(currentWordIdx - 1);
        event.preventDefault();
      }
    }
    if (event.code === EKeyCodes.Space && currentSpelling.length) {
      updateCurrentWordIdx(currentWordIdx + 1);
      event.preventDefault();
    }
  }

  const mapWordBankToAnswers = () => {
    const currentSpelling = typedWords[currentWordIdx];

    const words = wordBank.map((word, idx) => {
      if (currentWordIdx === idx) {
        return (
          <Containers.Word highlighted key={idx}>
            <SpellCheckedWord currentSpelling={currentSpelling} currentWord={word} />
          </Containers.Word>
        )
      } else {
        let color = '';
        if (typedWords[idx]) {
          color = typedWords[idx] === word ? 'green' : 'red'
        }
        return (
          <Containers.Word
            key={idx}
            color={color}
          >
            {word}
          </Containers.Word>
        )
      }
    })

    return words;
  }

  return (
    <Containers.Column>
      {timer}
      <input
        value={typedWords[currentWordIdx]}
        type='text'
        onKeyDown={handleWordNavigation}
        onChange={handleChange}
      />
      <Containers.WordBankContainer>
        {mapWordBankToAnswers()};
      </Containers.WordBankContainer>
    </Containers.Column>
  )
}

const SpellCheckedWord = ({ currentSpelling, currentWord }: any) => {
  return currentWord.split('').map((char: string, idx: number) => {
    const typedChar = currentSpelling[idx]
    if (typedChar) {
      if (typedChar === char) {
        return <Containers.CorrectSpelling key={idx}>{char}</Containers.CorrectSpelling>
      } else {
        return <Containers.WrongSpelling key={idx}>{char}</Containers.WrongSpelling>
      }
    } else {
      return <span key={idx}>{char}</span>;
    }
  })
}