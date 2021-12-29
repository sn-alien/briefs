import * as React from "react";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import useRouteLoader from "@hooks/useRouteLoader";

import Tooltip from "@components/Tooltip";
import Button from "@components/buttons/Button";
import Wrapper from "@components/layout/Wrapper";

const Navbar = (): JSX.Element => {
  return (
    <>
      <NavbarBg>
        <Wrapper>
          <InnerNavbar>
            <Link href={"/home"} passHref>
              <Logo>
                <Image src="/briefs.svg" height="44" width="90" />
              </Logo>
            </Link>

            <LinksContainer>
              <Link prefetch href={"/home"} passHref>
                <StyledLinkText as="a" variant="body1">
                  Home
                </StyledLinkText>
              </Link>
              <Link prefetch href={"/test-form"} passHref>
                <StyledLinkText as="a" variant="body1">
                  Form
                </StyledLinkText>
              </Link>
            </LinksContainer>
            <UserContainer>
              <Tooltip title="Account">
                <IconButton onClick={handleOpenNavMenu}>
                  <AccountCircleRoundedIcon />
                </IconButton>
              </Tooltip>
              <MenuStyled
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                <Link href={"/settings"}>
                  <MenuItemStyled onClick={handleCloseNavMenu}>
                    <ListItemIcon>
                      <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography
                      component="a"
                      variant="body2"
                      textAlign="center"
                    >
                      Settings
                    </Typography>
                  </MenuItemStyled>
                </Link>
                <MenuItemStyled onClick={handleCloseNavMenu}>
                  <ListItemIcon>
                    <LogoutRoundedIcon fontSize="small" />
                  </ListItemIcon>

                  <Typography variant="body2" textAlign="center">
                    Logout
                  </Typography>
                </MenuItemStyled>
              </MenuStyled>
            </UserContainer>
          </InnerNavbar>
        </Wrapper>
      </NavbarBg>
      <LoaderWrap>
        {loading && <LinearProgress variant="indeterminate" />}
      </LoaderWrap>
    </>
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

const Logo = styled("a")`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksContainer = styled("div")`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLinkText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;
  padding: 8px;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

const UserContainer = styled("div")``;

const MenuStyled = styled(Menu)`
  .MuiMenu-list {
    padding: 0;
  }
  .MuiMenu-paper {
    border: 1px solid ${({ theme }) => theme.palette.divider};
    box-shadow: none;
  }
`;

const MenuItemStyled = styled(MenuItem)`
  padding: 8px 14px;
`;
const LoaderWrap = styled("div")`
  height: 4px;
`;

export default Navbar;
