import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import {BaseHeader} from "@components/Header";

export default function PasswordRecoverView() {

  return (
    <>
      <BaseHeader />
      <Container sx={{py: 2}} maxWidth="sm">
        <Paper sx={{p: 2}}>
          <FormControl fullWidth sx={{my: 1}} variant="outlined">
            <TextField label="Email"/>
          </FormControl>
          <Button size="large" fullWidth sx={{my: 2}}
            variant="contained"
          >Recuperar senha
          </Button>
        </Paper>
      </Container>
    </>
  );
}