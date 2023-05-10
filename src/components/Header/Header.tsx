import {useState} from "react";
import {Link as RouterLink} from "react-router-dom";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import * as colors from "@mui/material/colors";
import styled from "@emotion/styled";
import BaseHeader from "./BaseHeader";

const LINKS = [
  {
    href: "/sobre",
    label: "Quem Somos"
  },
  {
    href: "/solicitar-coleta",
    label: "Como Solicitar sua Coleta"
  },
  {
    href: "/seja-parceiro",
    label: "Seja uma empresa parceira"
  },

];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLink = () => {
    // todo: add code
  };

  return (
    <BaseHeader>
      <Box sx={{display: {xs: "flex", md: "none"}}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: {xs: "block", md: "none"}
          }}
        >
          {LINKS.map((link, i) => (
            <MenuItem key={String(i + 1)} onClick={handleOpenLink}>
              <Typography >
                {link.label}
              </Typography>
            </MenuItem>
        ))}
        </Menu>
      </Box>
      <Box sx={{display: {xs: "none", md: "flex"}}}>
        {LINKS.map(link => (
          <AppBarLink
            key={link.href}
            sx={{mx: {xs: 0, md: 2}}}
            component={RouterLink}
            to={link.href}
          >{link.label}
          </AppBarLink>
            ))}
      </Box>
    </BaseHeader>
  );
}

const AppBarLink = styled(Link)`
  color: ${colors.common.black};
  text-decoration: none;
`;
