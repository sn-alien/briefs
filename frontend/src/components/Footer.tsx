import * as React from "react";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Wrapper from "./layout/Wrapper";

const Footer = (): JSX.Element => {
  return (
    <FooterWrap>
      <Wrapper>
        <InnerFooter>
          <Typography variant="h6">Logo</Typography>
        </InnerFooter>
      </Wrapper>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled("div")`
  background-color: ${({ theme }) => theme.palette.grey[200]};
  min-height: max-content;
  height: 260px;
`;

const InnerFooter = styled("div")`
  display: flex;
  align-items: center;
  height: 100%;
`;
