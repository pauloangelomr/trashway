import {useSearchParams} from "react-router-dom";
import {useState, SyntheticEvent} from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PasswordInput from "@components/PasswordInput";
import {BaseHeader} from "@components/Header";
import Link from "@components/Link";

export default function RegisterView() {
  const [searchParams] = useSearchParams();
  const [tabIndex, setTabIndex] = useState(searchParams.get("role") === "partner" ? 1 : 0);

  const handleChange = (_ev: SyntheticEvent, valueIndex: number) => setTabIndex(valueIndex);

  return (
    <>
      <BaseHeader />
      <Container sx={{py: 2}} maxWidth="sm">
        <Paper sx={{p: 2}}>
          <Tabs value={tabIndex} onChange={handleChange}>
            <Tab label="Cliente" />
            <Tab label="Parceiro" />
          </Tabs>
          {tabIndex === 0 && (
            <>
              <FormControl fullWidth sx={{my: 1}} variant="outlined">
                <TextField label="Nome"/>
              </FormControl>
              <FormControl fullWidth sx={{my: 1}} variant="outlined">
                <TextField label="Email"/>
              </FormControl>
              <FormControl fullWidth sx={{my: 1}} variant="outlined">
                <TextField label="Celular"/>
              </FormControl>
              <FormControl fullWidth sx={{my: 1}} variant="outlined">
                <PasswordInput id="senha" label="Senha" />
              </FormControl>
              <FormControl fullWidth sx={{my: 1}} variant="outlined">
                <PasswordInput label="Confirmar senha" id="confirmar-senha" />
              </FormControl>
            </>
          )}
          {tabIndex === 1 && (
            <>
              <FormControl fullWidth sx={{my: 1}} variant="outlined">
                <TextField label="Nome"/>
              </FormControl>
              <FormControl fullWidth sx={{my: 1}} variant="outlined">
                <TextField label="Email"/>
              </FormControl>
              <FormControl fullWidth sx={{my: 1}} variant="outlined">
                <TextField label="Celular"/>
              </FormControl>
              <FormControl fullWidth sx={{my: 1}} variant="outlined">
                <PasswordInput id="senha" label="Senha" />
              </FormControl>
              <FormControl fullWidth sx={{my: 1}} variant="outlined">
                <PasswordInput label="Confirmar senha" id="confirmar-senha" />
              </FormControl>
            </>
          )}
          <Button size="large" fullWidth sx={{my: 2}}
            variant="contained"
          >Cadastrar
          </Button>
          <Link to="/login">Já tenho uma conta</Link>
        </Paper>
      </Container>
    </>
  );
}