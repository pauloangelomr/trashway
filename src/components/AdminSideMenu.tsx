import {useMemo} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import {CUSTOMER_MENU_OPTIONS, PROVIDER_MENU_OPTIONS} from "@components/Header/AdminHeader";
import {useAppDispatch} from "@hooks/useAppDispatch";
import {logout} from "@store/user/userSlice";

export default function AdminSideMenu() {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const pathName = useMemo(() => {
    return pathname.substring(pathname.lastIndexOf("/") + 1);
  }, [pathname]);

  const handlePressOption = (optionId: string) => {
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
    <Paper sx={{display: {xs: "none", md: "flex"}}}>
      <nav>
        <List>
          {CUSTOMER_MENU_OPTIONS.map(option => (
            <ListItem key={option.id}>
              <ListItemButton selected={pathName === option.id} onClick={() => handlePressOption(option.id)}>
                <ListItemText primary={option.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Paper>
  );
}