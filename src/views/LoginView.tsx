import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import PasswordInput from "@components/PasswordInput";
import {BaseHeader} from "@components/Header";
import {useNavigate} from "react-router-dom";

export default function LoginView() {
  const navigate = useNavigate();

  const handlePressLogin = () => {
    navigate("/admin");
  };

  return (
    <>
      <BaseHeader />
      <Container sx={{py: 2}} maxWidth="sm">
        <Paper sx={{p: 2}}>
          <FormControl fullWidth sx={{my: 1}} variant="outlined">
            <TextField label="Email"/>
          </FormControl>
          <FormControl fullWidth sx={{my: 1}} variant="outlined">
            <PasswordInput id="senha" label="Senha" />
          </FormControl>
          <Button size="large" fullWidth sx={{my: 2}}
            onClick={handlePressLogin}
            variant="contained"
          >Entrar
          </Button>
        </Paper>
      </Container>
    </>
  );
}