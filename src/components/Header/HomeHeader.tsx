import {useState} from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Link from "@components/Link";
import BaseHeader from "./BaseHeader";

const LINKS = [
  {
    href: "/sobre",
    label: "Quem Somos"
  },
  {
    href: "/admin/dashboard?action=order", // todo: add create order query
    label: "Como Solicitar sua Coleta"
  },
  {
    href: "/cadastro?role=partner",
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
          <Link
            key={link.href}
            sx={{mx: {xs: 0, md: 2}}}
            to={link.href}
          >
            {link.label}
          </Link>
          ))}
      </Box>
    </BaseHeader>
  );
}
