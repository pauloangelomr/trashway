import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TrashPlaceholderImg from "@assets/trashPlaceholder.png";
import {createSxStyles} from "@helpers/createSxStyles";
import {useAppSelector} from "@hooks/useAppSelector";
import {selectUser} from "@store/user/userSelectors";
import IconButton from "@mui/material/IconButton";
import DelteteIcon from "@mui/icons-material/Delete";
import {IOrder} from "@interfaces/orderInterface";

type IProps = {
  order: IOrder;
}

export default function TrashRequest({order}: IProps) {
  const {user} = useAppSelector(selectUser);

  console.log(order);

  return (
    <Card sx={cardContainerStyles}>
      <CardMedia
        component="img"
        title="trash request"
        sx={cardMediaStyles}
        image={TrashPlaceholderImg}
      />
      <IconButton color="error" sx={deleteIconButtonStyles} size="small">
        <DelteteIcon />
      </IconButton>
      <CardContent>
        <Typography>{order.address}</Typography>
      </CardContent>
      <CardActions>
        {user!.cpf && (
          <Button size="small" fullWidth
            variant="contained"
          >Visualizar
          </Button>
        )}
        {user!.cnpj && (
          <Button size="small" color="success" fullWidth
            variant="contained"
          >Agendar coleta
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

const cardContainerStyles = createSxStyles({
  maxWidth: {xs: "inherit", md: 300},
  position: "relative"
});

const cardMediaStyles = createSxStyles({
  height: 200,
  objectFit: "contain",
  backgroundColor: "grey"
});

const deleteIconButtonStyles = createSxStyles({
  position: "absolute",
  top: 0,
  right: 0
});