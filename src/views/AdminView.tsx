import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import {AdminHeader} from "@components/Header";
import AdminSideMenu from "@components/AdminSideMenu";
import TrashRequest from "@components/TrashRequest";
import {createSxStyles} from "@helpers/createSxStyles";

export default function AdminView(){
  // regras de negócio: verificar se usuário é parceiro, ou cliente
  // header que vai mostrar menu c/ opções no celular
  // header opção deslogar
  // desktop vai mostrar menu lateral c/ opções
  // Listagem estilo instagram: image, endereço, número do pedido
  // todo: abrir detalhes do pedido (modal?)
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
              {Array.from({length: 10}).map((_, i) => (
                <Grid key={String(i + 1)} item md={3}
                  xs={12}
                >
                  <TrashRequest key={String(i + 1)} />
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