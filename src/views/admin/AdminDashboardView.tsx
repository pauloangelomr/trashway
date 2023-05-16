import {useEffect} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import {AdminHeader} from "@components/Header";
import AdminSideMenu from "@components/AdminSideMenu";
import TrashRequest from "@components/TrashRequest";
import {createSxStyles} from "@helpers/createSxStyles";
import {useAppSelector} from "@hooks/useAppSelector";
import {useAppDispatch} from "@hooks/useAppDispatch";
import {getOrdersByUserId} from "@store/order/orderSlice";
import {selectUser} from "@store/user/userSelectors";
import {selectOrder} from "@store/order/orderSelectors";

export default function AdminDashboardView(){
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(selectUser);
  const {orders, isLoading, hasError} = useAppSelector(selectOrder);

  useEffect(() => {
    dispatch(getOrdersByUserId({userId: user!.id}));
  }, [dispatch, user]);

  return (
    <>
      <AdminHeader />
      <Box sx={containerStyles}>
        <Box>
          <AdminSideMenu />
        </Box>
        <Card sx={contentStyles}>
          <CardContent>
            <Grid container rowSpacing={2} columnSpacing={{xs: 0, md: 2}}>
              {isLoading &&
                Array.from({length: 5}).map((_, i) => (
                  <Grid key={String(i + 1)} item md={3}
                    xs={12}
                  >
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="200px"
                    />
                  </Grid>
                ))}

              {!isLoading && orders.map((order) => (
                <Grid key={String(order.id)} item md={3}
                  xs={12}
                >
                  <TrashRequest />
                </Grid>
            ))}

            </Grid>
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