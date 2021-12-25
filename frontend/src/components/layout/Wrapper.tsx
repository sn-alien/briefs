import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

interface Props {
  children: any;
}

const Wrapper = ({ children }: Props): JSX.Element => {
  return <ContainerStyled maxWidth="lg">{children}</ContainerStyled>;
};

export default Wrapper;

const ContainerStyled = styled(Container)`
  min-height: 100%;
  height: 100%;
`;
