import {PropsWithChildren} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import * as colors from "@mui/material/colors";
import styled from "@emotion/styled";
import LogoImage from "@assets/logo.jpg";
import {createSxStyles} from "@helpers/createSxStyles";
import Link from "@components/Link";

export default function BaseHeader({children}: PropsWithChildren) {
  return (
    <>
      <AppBar component="nav" sx={containerStyles} color="transparent">
        <Toolbar>
          <Box sx={contentStyles}>
            <Box sx={logoWrapperStyles}>
              <Link to="/">
                <Logo src={LogoImage} />
              </Link>
            </Box>
            {children}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </>
  );
}

const containerStyles = createSxStyles({backgroundColor: colors.common.white});

const contentStyles = createSxStyles({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: {xs: "100%", md: "auto"}
});

const logoWrapperStyles = createSxStyles({mr: {md: 2}});

const Logo = styled.img`
  aspect-ratio: 1/1;
  width: 3rem;
  border-radius: 4px;
`;

