import styled from 'styled-components';
import Paper from '@mui/material/Paper';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 5%;
`

export const Base = styled(Paper)<any>`
  display: flex;
  height: ${({ height = '100%'}) => height };
  width: ${({ width = '100%'}) => width };
`

export const Column = styled(Base)`
  flex-direction: column;
`

export const Row = styled(Base)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 5px 0;

`

