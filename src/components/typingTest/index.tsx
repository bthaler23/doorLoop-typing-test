import React, { ChangeEvent, MutableRefObject, } from 'react';
import * as Containers from '../containers';
import WordBank from './wordbank';
import Stats from './stats';
import { EKeyCodes } from 'interfaces';

export interface IProps {
  wordBank: string[];
  timer?: number;
}

export enum ETestStatus { NotStarted, Started,  Finished };

export default ({ wordBank = [], timer = 2 }: IProps) => {
  
  const [testStatus, updateTestStatus] = React.useState<ETestStatus>(ETestStatus.NotStarted);
  const [currentWordIdx, updateCurrentWordIdx] = React.useState(0);
  
  const emptyTypedWords = wordBank.map(() => '');
  const [typedWords, updateTypedWords] = React.useState<string[]>(emptyTypedWords);
  
  const [countdown, updateCountdown] = React.useState(timer);
  const countdownRef = React.useRef(updateCountdown);
  let intervalRef: MutableRefObject<any> = React.useRef();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newTypedWords = [...typedWords];
    newTypedWords[currentWordIdx] = event.target.value;
    updateTypedWords(newTypedWords);
    if (testStatus === ETestStatus.NotStarted) {
      updateTestStatus(ETestStatus.Started);
      startCountdown();
    }
  };
  
  const startCountdown = () => {
    intervalRef.current = setInterval(() => countdownRef.current(countdown => countdown - 1), 1000)
  }

  React.useEffect(() => {
    if (testStatus === ETestStatus.Started && countdown <= 0) {
      clearInterval(intervalRef.current);
      updateTestStatus(ETestStatus.Finished);
    } 
  }, [countdown, testStatus])

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


  if (testStatus === ETestStatus.Finished) {
    return (
      <Containers.Column>
        Congratulations!
          <Stats
          typedWords={typedWords}
          wordBank={wordBank}
          timeElapsed={timer - countdown}
      />      
      </Containers.Column>

    )
  }
  return (
    <Containers.Column>
      {countdown}
      <Stats
        typedWords={typedWords}
        wordBank={wordBank}
        timeElapsed={timer - countdown}
      />
      <input
        value={typedWords[currentWordIdx]}
        type='text'
        onKeyDown={handleWordNavigation}
        onChange={handleChange}
      />
      <WordBank 
        typedWords={typedWords}
        wordBank={wordBank}
        currentWordIdx={currentWordIdx}
      />
    </Containers.Column>
  )
}

