import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface IProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function AdminRequestOrderModal({isVisible, onClose}: IProps) {
  const handleSubmitRequest = () => {
    onClose();
  };

  return (
    <Dialog open={isVisible} onClose={onClose}>
      <DialogTitle>Solicitar coleta de lixo</DialogTitle>
      <Box sx={{p: 2}}>
        <FormControl fullWidth sx={{my: 1}} variant="outlined">
          <TextField label="Nome"/>
        </FormControl>
        <FormControl fullWidth sx={{my: 1}} variant="outlined">
          <TextField label="Tipo"/>
        </FormControl>
        <FormControl fullWidth sx={{my: 1}} variant="outlined">
          <TextField label="Detalhes"/>
        </FormControl>
        <FormControl fullWidth sx={{my: 1}} variant="outlined">
          <TextField label="Peso"/>
        </FormControl>
        {/* todo: add photo input here */}
        <Button fullWidth sx={{my: 1}} variant="contained"
          color="success" onClick={handleSubmitRequest}
        >Solicitar coleta
        </Button>
      </Box>
    </Dialog>
  );
}