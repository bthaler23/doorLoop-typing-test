import React from 'react';
import styled from 'styled-components'
import Typography from '@mui/material/Typography';

import * as Containers from '../containers';

export const WordBankContainer = styled(Containers.Base)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-height: 50%;
  overflow: scroll;
`

export const Word = styled(Typography)<any>`
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