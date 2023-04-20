import React, { useState } from "react";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  IconButton,
  LinearProgress,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

import Tooltip from "@components/Tooltip";
import { Button } from "@components/buttons";

const Navbar = (): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  return (
    <>
      <NavbarBg>
        <InnerContainer maxWidth={false}>
          <InnerNavbar>
            <Link href={"/home"}>
              <Logo>
                <Image alt="" src="/briefs.svg" height="44" width="90" />
              </Logo>
            </Link>

            <LinksContainer>
              <StyledLinkText href={"/home"}>Home</StyledLinkText>
              <StyledLinkText href={"/test-form"}>Form</StyledLinkText>
              <StyledLinkText href={"/test-form/simple"}>
                Simple Form
              </StyledLinkText>
              <StyledLinkText href={"/test-form/build"}>
                Form Builder
              </StyledLinkText>
            </LinksContainer>
            {true ? (
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
                      <Typography variant="body2" textAlign="center">
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
            ) : (
              <AuthContainer>
                <Link href="/auth/login">
                  <Button size="small" variant="text">
                    Log in
                  </Button>
                </Link>
                <Link href="/auth/sign-up">
                  <Button size="small" variant="contained">
                    Sign up
                  </Button>
                </Link>
              </AuthContainer>
            )}
          </InnerNavbar>
        </InnerContainer>
      </NavbarBg>
      <LoaderWrap></LoaderWrap>
    </>
  );
};

const NavbarBg = styled("div")`
  height: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  ${({ theme }) => theme.mixins.toolbar}
`;

const InnerContainer = styled(Container)`
  min-height: 100%;
  height: 100%;
`;
const InnerNavbar = styled("div")`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Logo = styled("div")`
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

const StyledLinkText = styled(Link)`
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;
  padding: 8px;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

const UserContainer = styled("div")``;
const AuthContainer = styled("div")``;

const MenuStyled = styled(Menu)`
  .MuiMenu-list {
    /* padding: 0; */
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
