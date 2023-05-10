import {PropsWithChildren} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import * as colors from "@mui/material/colors";
import styled from "@emotion/styled";
import LogoImage from "@assets/logo.jpg";

export default function BaseHeader({children}: PropsWithChildren) {
  return (
    <>
      <AppBar component="nav" sx={{backgroundColor: colors.common.white}} color="transparent">
        <Toolbar>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: {xs: "100%", md: "auto"}
          }}
          >
            <Box sx={{mr: {md: 2}}}>
              <Logo src={LogoImage} />
            </Box>
            {children}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </>
  );
}

const Logo = styled.img`
  aspect-ratio: 1/1;
  width: 3rem;
  border-radius: 4px;
`;

