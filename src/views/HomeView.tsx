import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router-dom";
import RecyclingIcon from "@mui/icons-material/Recycling";
import * as colors from "@mui/material/colors";
import styled from "@emotion/styled";
import {Header} from "@components/Header";
import BackgroundImage from "@assets/background.jpg";
import {createSxStyles} from "@helpers/createSxStyles";

const PRODUCTS = [
  {
    label: "Vidros",
    color: colors.green[500]
  },
  {
    label: "Metais",
    color: colors.yellow[500]
  },
  {
    label: "Não Reciclaveis",
    color: colors.grey[500]
  },
  {
    label: "Plásticos",
    color: colors.red[500]
  },
  {
    label: "Papéis",
    color: colors.blue[500]
  },
  {
    label: "Orgânicos",
    color: colors.brown[500]
  },
];

const LINKS = [
  "Contato",
  "Seja um parceiro",
  "Instagram",
  "Facebook"
];

export default function HomeView() {

  return (
    <>
      <Header />
      <ImageBackground src={BackgroundImage} />
      <Container maxWidth="md">
        <Subtitle variant='h5'>A importância de criarmos um mundo melhor!</Subtitle>
        <Typography>&quot;Faça a diferença no planeta! Pratique a coleta seletiva de lixo em sua casa, escola ou trabalho. Separando o lixo reciclável do orgânico, você está ajudando a preservar o meio ambiente e a garantir um futuro sustentável para as próximas gerações. Vamos juntos cuidar do nosso planeta! Comece agora mesmo a separar seu lixo e contribua para um mundo melhor.&quot;</Typography>
        <Subtitle variant='h5'>Quais os tipos de materias que podem ser reciclados</Subtitle>
        <Grid container rowSpacing={{xs: 1, md: 2}} columnSpacing={{xs: 1, md: 2}}
          sx={productsStyles}
        >
          {PRODUCTS.map((product, i) => (
            <Grid key={String(i + 1)} item md={4}
              xs={6}
            >
              <Card sx={productCardStyles}>
                <RecyclingIcon sx={{...productIconStyles, color: product.color}} />
                <Typography paragraph variant='h5' sx={{textAlign: "center"}}>{product.label.toUpperCase()}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={footerStyles}>
          {LINKS.map(link => <Link key={link} component={RouterLink} to="/sobre">{link}</Link>)}
        </Box>
      </Container>
    </>
  );
}

const productsStyles = createSxStyles({
  px: {xs: 0, md: 2}
});

const productCardStyles = createSxStyles({
  p: 1,
  aspectRatio: "1 / 1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around"
});

const productIconStyles = createSxStyles({fontSize: 120,});
const footerStyles = createSxStyles({
  mt: 2,
  p: {xs: 2, md: 10},
  display: "flex",
  flexDirection: {xs: "column", md: "row"},
  alignItems: "center",
  justifyContent: "space-between",
});

const ImageBackground = styled.img`
  width: 100%;
  height: 250px;
  aspect-ratio: 16 / 9;
`;

const Subtitle = styled(Typography)`
  margin: 2rem 0;
  text-align: center;
`;