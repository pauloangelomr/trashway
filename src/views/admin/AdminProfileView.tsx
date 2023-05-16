import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {AdminHeader} from "@components/Header";
import AdminSideMenu from "@components/AdminSideMenu";
import {createSxStyles} from "@helpers/createSxStyles";

export default function AdminProfileView(){

  return (
    <>
      <AdminHeader />
      <Box sx={containerStyles}>
        <Box>
          <AdminSideMenu />
        </Box>
        <Card sx={contentStyles}>
          <CardContent>

          </CardContent>
        </Card>
      </Box>
    </>
  );
}

const containerStyles = createSxStyles({
  display: "flex",
  flexDirection: {xs: "column", md: "row"},
  p: 2,
});

const contentStyles = createSxStyles({
  flex: 1,
  ml: {xs: 0, md: 2}
});