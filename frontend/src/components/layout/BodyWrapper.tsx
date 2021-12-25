import * as React from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';

interface Props {
  children: any;
}

const BodyWrapper = ({ children }: Props): JSX.Element => {
  return (
    <ContainerStyled disableGutters maxWidth={false}>
      {children}
    </ContainerStyled>
  );
};

export default BodyWrapper;

const ContainerStyled = styled(Container)`
  height: calc(100% - 4.5rem);
`;
