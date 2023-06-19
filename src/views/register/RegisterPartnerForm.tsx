import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import PasswordInput from "@components/inputs/PasswordInput";
import {IRegisterPartnerFormData, registerPartnerFormSchema} from "@helpers/validators/registerValidator";

interface IProps {
  onSubmit: (formData: IRegisterPartnerFormData) => void;
}

export default function RegisterPartnerForm({onSubmit}: IProps) {
  const {register, handleSubmit, formState: {errors}} = useForm<IRegisterPartnerFormData>({
    resolver: zodResolver(registerPartnerFormSchema)
  });

  console.log(errors);

  const handleRegister = (formData: IRegisterPartnerFormData) => {
   onSubmit(formData);
  };

  return (
    <>
      <FormControl fullWidth sx={{my: 1}} variant="outlined">
        <TextField label="Nome" {...register("firstName")} />
      </FormControl>
      <FormControl fullWidth sx={{my: 1}} variant="outlined">
        <TextField label="Sobrenome" {...register("lastName")} />
      </FormControl>
      <FormControl fullWidth sx={{my: 1}} variant="outlined">
        <TextField label="Email" {...register("email")} />
      </FormControl>
      <FormControl fullWidth sx={{my: 1}} variant="outlined">
        <TextField label="Celular" {...register("phone")} />
      </FormControl>
      <FormControl fullWidth sx={{my: 1}} variant="outlined">
        <TextField label="CNPJ" {...register("cnpj")} />
      </FormControl>
      <FormControl fullWidth sx={{my: 1}} variant="outlined">
        <PasswordInput id="senha" label="Senha" {...register("password")} />
      </FormControl>
      <FormControl fullWidth sx={{my: 1}} variant="outlined">
        <PasswordInput label="Confirmar senha" id="confirmar-senha" {...register("confirmPassword")} />
      </FormControl>

      <Button size="large" fullWidth sx={{my: 2}}
        variant="contained" onClick={handleSubmit(handleRegister)}
      >Cadastrar
      </Button>
    </>
  );
}