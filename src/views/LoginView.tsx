import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import PasswordInput from "@components/PasswordInput";
import {BaseHeader} from "@components/Header";
import Link from "@components/Link";
import {useAppDispatch} from "@hooks/useAppDispatch";
import {useAppSelector} from "@hooks/useAppSelector";
import {login} from "@store/user/userSlice";
import {selectUser} from "@store/user/userSelectors";

export default function LoginView() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(selectUser);

  const handlePressLogin = () => {
    dispatch(login({user: {name: "Johnsons"}}));
  };

  useEffect(() => {
    if (user) navigate("/admin");
  }, [user, navigate]);

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
          <Link to="/cadastro">Quero me cadastrar</Link>
        </Paper>
      </Container>
    </>
  );
}