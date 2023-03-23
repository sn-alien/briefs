import * as React from "react";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

import Wrapper from "./layout/Wrapper";

const Footer = (): JSX.Element => {
  return (
    <FooterWrap>
      <Wrapper>
        <InnerFooter>
          <Image alt="" src="/briefs-pale.svg" height="44" width="90" />
        </InnerFooter>
      </Wrapper>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled("div")`
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  background-color: ${({ theme }) => theme.palette.grey[200]};
  min-height: max-content;
  height: 260px;
`;

const InnerFooter = styled("div")`
  display: flex;
  align-items: center;
  height: 100%;
`;
