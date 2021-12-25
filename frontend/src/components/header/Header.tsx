import * as React from 'react';
import styled from '@emotion/styled';
import Wrapper from '@components/layout/Wrapper';
import { Typography } from '@mui/material';

const Header = (): JSX.Element => {
  return (
    <NavbarBg>
      <InnerNavbar>
        <Typography variant="h3">Logo ｡◕‿◕｡</Typography>
      </InnerNavbar>
    </NavbarBg>
  );
};

const NavbarBg = styled.div`
  background-color: #6991ff;
  height: 4.5rem;
`;
const InnerNavbar = styled(Wrapper)`
  display: flex !important;
  align-items: center !important;
  height: 4.5rem;
`;

export default Header;
