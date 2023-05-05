import {Container, Typography, Card, Grid, Box} from "@mui/material";
import BackgroundImage from "../assets/bg.jpg";
import {Link} from "react-router-dom";
import RecyclingIcon from "@mui/icons-material/Recycling";

const PRODUCTS = [
  {
    label: "Vidros"
  },
  {
    label: "Metais"
  },
  {
    label: "Não Reciclaveis"
  },
  {
    label: "Plásticos"
  },
  {
    label: "Papéis"
  },
  {
    label: "Orgânicos"
  },
];

const LINKS = [
  "Contato",
  "Seja um parceiro",
  "Instagram",
  "Facebook"
];

export default function HomeView() {
  // Header
  return (
    <>
      <Container>
        <img src={BackgroundImage} />
        <Typography variant='h5'>A importância de criarmos um mundo melhor!</Typography>
        <Typography>&quot;Faça a diferença no planeta! Pratique a coleta seletiva de lixo em sua casa, escola ou trabalho. Separando o lixo reciclável do orgânico, você está ajudando a preservar o meio ambiente e a garantir um futuro sustentável para as próximas gerações. Vamos juntos cuidar do nosso planeta! Comece agora mesmo a separar seu lixo e contribua para um mundo melhor.&quot;</Typography>
        <Typography variant='h5'>Quais os tipos de materias que podem ser reciclados</Typography>
        <Grid container rowSpacing={2} columnSpacing={{xs: 0, md: 2}}>
          {PRODUCTS.map((product, i) => (
            <Grid key={String(i + 1)} item md={4} xs={12} >
              <Card sx={{
                p: 1,
                aspectRatio: "1 / 1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around"
              }}>
                <RecyclingIcon sx={{fontSize: 120}} />
                <Typography paragraph variant="h5">{product.label.toUpperCase()}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{mt: 2,}}>

        {LINKS.map(link => <Link key={link} to='#'>{link}</Link>)}
        </Box>
      </Container>
    </>
  );
}