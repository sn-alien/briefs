import * as React from "react";

import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

interface Props {
  children: any;
  maxWidth?: "lg" | "md" | "sm" | "xl" | "xs" | false;
}

const PageBox = ({ children, maxWidth = false }: Props): JSX.Element => {
  return (
    <ContainerStyled disableGutters maxWidth={maxWidth}>
      {children}
    </ContainerStyled>
  );
};

export default PageBox;

const ContainerStyled = styled(Container)`
  padding: 1rem 0;
  /* height: calc(100% - 4.5rem); */
`;
