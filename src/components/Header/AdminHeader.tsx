import {useState} from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {createSxStyles} from "@helpers/createSxStyles";
import BaseHeader from "./BaseHeader";
import {useAppSelector} from "@hooks/useAppSelector";
import {selectUser} from "@store/user/userSelectors";

export const CUSTOMER_MENU_OPTIONS = [
  {
    id: "dashboard",
    label: "Dashboard"
  },
  {
    id: "profile",
    label: "Perfil"
  },
  {
    id: "logout",
    label: "Sair"
  }
];

export const PROVIDER_MENU_OPTIONS = [
  ...CUSTOMER_MENU_OPTIONS
];

export default function AdminHeader() {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
const {user} = useAppSelector(selectUser);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOption = (optionId: string) => {
    // todo: add code
  };

  return (
    <BaseHeader>
      <Box sx={menuContainerStyles}>
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
          sx={menuStyles}
        >
          {CUSTOMER_MENU_OPTIONS.map((option, i) => (
            <MenuItem key={String(i + 1)} onClick={() => handleOption(option.id)}>
              <Typography >
                {option.label}
              </Typography>
            </MenuItem>
        ))}
        </Menu>
      </Box>
      <Typography sx={userNameStyles}>{`Olá, ${user!.name}`}</Typography>
    </BaseHeader>
  );
}

const menuContainerStyles = createSxStyles({display: {xs: "flex", md: "none"}});

const menuStyles = createSxStyles({display: {xs: "block", md: "none"}});

const userNameStyles = createSxStyles({display: {xs: "none", md: "flex"}});