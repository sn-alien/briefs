import * as React from "react";

import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

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
  padding: 1rem 0;
  /* height: calc(100% - 4.5rem); */
`;
