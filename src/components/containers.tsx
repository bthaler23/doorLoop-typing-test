import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`
export const Column = styled(Container)`
  flex-direction: column;
  
`

export const WordBankContainer = styled(Container)`
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