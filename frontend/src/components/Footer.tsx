import * as React from 'react';
import styled from '@emotion/styled';
import Wrapper from './layout/Wrapper';
import { Typography } from '@mui/material';

const Footer = (): JSX.Element => {
  return (
    <FooterWrap>
      <Wrapper>
        <Typography variant="h2">Footy innit mate</Typography>
      </Wrapper>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  background-color: #fffd69;
  min-height: max-content;
`;
