import {useState, useMemo} from "react";
import {useLocation, useNavigate} from "react-router-dom";
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
import {useAppDispatch} from "@hooks/useAppDispatch";
import {logout} from "@store/user/userSlice";

export const CUSTOMER_MENU_OPTIONS = [
  {
    id: "dashboard",
    label: "Dashboard"
  },
  {
    id: "perfil",
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
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const pathName = useMemo(() => {
    return pathname.substring(pathname.lastIndexOf("/") + 1);
  }, [pathname]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOption = (optionId: string) => {
    if (optionId === "dashboard") {
      navigate("/admin/dashboard");
    }
    if (optionId === "perfil") {
      navigate("/admin/perfil");
    }
    if (optionId === "logout") {
      dispatch(logout());
    }
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
            <MenuItem key={String(i + 1)} onClick={() => handleOption(option.id)} selected={option.id === pathName}>
              <Typography>
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