import {useEffect} from "react";
import {useSearchParams, useNavigate, useLocation} from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import {AdminHeader} from "@components/Header";
import AdminSideMenu from "@components/AdminSideMenu";
import TrashRequest from "@components/TrashRequest";
import {createSxStyles} from "@helpers/createSxStyles";
import {useAppSelector} from "@hooks/useAppSelector";
import {useAppDispatch} from "@hooks/useAppDispatch";
import {getOrders} from "@store/order/orderSlice";
import {selectUser} from "@store/user/userSelectors";
import {selectOrder} from "@store/order/orderSelectors";
import AdminRequestOrderModal from "./AdminRequestOrderModal";

export default function AdminDashboardView() {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(selectUser);
  const {orders, isLoading} = useAppSelector(selectOrder);
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action");
  const {pathname} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    dispatch(getOrders());
  }, [dispatch, user]);

  const handleShowRequestModal = () => {
    navigate(`${pathname}?action=order`);
  };

  const handleCloseRequestModal = () => {
    dispatch(getOrders());
    navigate(pathname);
  };

  return (
    <>
      <AdminHeader />
      <Box sx={containerStyles}>
        <Box>
          <AdminSideMenu />
        </Box>
        <Card sx={contentStyles}>
          <CardContent>
            {user!.cpf && (
              <Button
                variant="contained"
                fullWidth
                sx={createOrderStyles}
                onClick={handleShowRequestModal}
              >
                Solicitar Coleta
              </Button>
            )}
            <Grid container rowSpacing={2} columnSpacing={{xs: 0, md: 2}}>
              {isLoading &&
                Array.from({length: 5}).map((_, i) => (
                  <Grid
                    key={String(i + 1)}
                    item md={3}
                    xs={12}
                  >
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="200px"
                    />
                  </Grid>
                ))}

              {!isLoading && user!.cpf && user!.orders.map((order) => (
                <Grid
                  key={String(order.id)}
                  item
                  md={3}
                  xs={12}
                >
                  <TrashRequest order={order} />
                </Grid>
              ))}

              {!isLoading && user!.cnpj && orders.map((order) => (
                <Grid
                  key={String(order.id)}
                  item
                  md={3}
                  xs={12}
                >
                  <TrashRequest order={order} />
                </Grid>
              ))}

            </Grid>
          </CardContent>
        </Card>
      </Box>
      <AdminRequestOrderModal isVisible={action === "order"} onClose={handleCloseRequestModal} />
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

const createOrderStyles = createSxStyles({
  mb: 2
});