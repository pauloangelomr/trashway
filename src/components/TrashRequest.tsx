import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TrashPlaceholderImg from "@assets/trashPlaceholder.png";
import {createSxStyles} from "@helpers/createSxStyles";

export default function TrashRequest() {
  return (
    <Card sx={cardContainerStyles}>
      <CardMedia
        component="img"
        title="trash request"
        sx={cardMediaStyles}
        image={TrashPlaceholderImg}
      />
      <CardContent>
        <Typography>Rua da esperança, n 77, Palmital</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="success" fullWidth
          variant="contained"
        >Agendar coleta
        </Button>
      </CardActions>
    </Card>
  );
}

const cardContainerStyles = createSxStyles({
  maxWidth: {xs: "inherit", md: 300},
});

const cardMediaStyles = createSxStyles({
  height: 200,
  objectFit: "contain",
  backgroundColor: "grey"
});