import React from 'react';
import styled from 'styled-components'
import * as Containers from '../containers';

export const WordBankContainer = styled(Containers.Base)`
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid black;
`

export const Word = styled.div<any>`
  padding: 5px;
  background-color: ${({ highlighted }) => highlighted && 'lightblue'};
  color: ${({ color }) => color};
`

export const CorrectSpelling = styled.span`
  color: green;
`
export const WrongSpelling = styled.span`
  color: red;
`