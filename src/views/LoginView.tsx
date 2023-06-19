import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PasswordInput from "@components/inputs/PasswordInput";
import {BaseHeader} from "@components/Header";
import Link from "@components/Link";
import {useAppDispatch} from "@hooks/useAppDispatch";
import {useAppSelector} from "@hooks/useAppSelector";
import {login} from "@store/user/userSlice";
import {selectUser} from "@store/user/userSelectors";

const loginFormSchema = z.object({
  email: z.string()
    .nonempty("O email é obrigatório")
    .email(),
  password: z.string()
    .min(6, "A senha deve conter 6 caracteres")
});

type ILoginFormData = z.infer<typeof loginFormSchema>;

export default function LoginView() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(selectUser);
  const {register, handleSubmit} = useForm<ILoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  useEffect(() => {
    if (user) navigate("/admin");
  }, [user, navigate]);

  const handleLogin = ({email, password}: ILoginFormData) => {
    dispatch(login({email, password}));
  };

  return (
    <>
      <BaseHeader />
      <Container sx={{py: 2}} maxWidth="sm">
        <Paper sx={{p: 2}}>
          <FormControl fullWidth sx={{my: 1}} variant="outlined">
            <TextField id="email" label="Email" {...register("email")}/>
          </FormControl>
          <FormControl fullWidth sx={{my: 1}} variant="outlined">
            <PasswordInput id="senha" label="Senha" {...register("password")} />
          </FormControl>
          <Button size="large" fullWidth sx={{my: 2}}
            onClick={handleSubmit(handleLogin)}
            variant="contained"
          >
            Entrar
          </Button>
          <Box>
            <Link to="/recuperar-senha">Esqueci a senha</Link>
          </Box>
          <Link to="/cadastro">Quero me cadastrar</Link>
        </Paper>
      </Container>
    </>
  );
}