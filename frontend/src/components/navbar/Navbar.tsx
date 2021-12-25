import * as React from "react";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Wrapper from "@components/layout/Wrapper";

const Navbar = (): JSX.Element => {
  return (
    <NavbarBg>
      <Wrapper>
        <InnerNavbar>
          <Typography variant="h6">Logo ｡◕‿◕｡</Typography>
        </InnerNavbar>
      </Wrapper>
    </NavbarBg>
  );
};

const NavbarBg = styled("div")`
  height: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
`;
const InnerNavbar = styled("div")`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default Navbar;
