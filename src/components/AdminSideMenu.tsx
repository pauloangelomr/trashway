import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import {CUSTOMER_MENU_OPTIONS, PROVIDER_MENU_OPTIONS} from "@components/Header/AdminHeader";

export default function AdminSideMenu() {
  return (
    <Paper sx={{display: {xs: "none", md: "flex"}}}>
      <nav>
        <List>
          {CUSTOMER_MENU_OPTIONS.map(option => (
            <ListItem key={option.id}>
              <ListItemButton>
                <ListItemText primary={option.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Paper>
  );
}