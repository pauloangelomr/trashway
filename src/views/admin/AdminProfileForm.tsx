import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import {profileCustomerFormSchema, IProfileCustomerFormData} from "@helpers/validators/profileValidator";
import {useAppSelector} from "@hooks/useAppSelector";
import {selectUser} from "@store/user/userSelectors";

interface IProps {
  onSubmit: (formData: IProfileCustomerFormData) => void;
}

export default function RegisterCustomerForm({onSubmit}: IProps) {
  const {user} = useAppSelector(selectUser);
  console.log(user);
  const {register, handleSubmit} = useForm<IProfileCustomerFormData>({
    resolver: zodResolver(profileCustomerFormSchema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone,
      cpf: user?.cpf
    }
  });

  const handleRegister = (formData: IProfileCustomerFormData) => {
   onSubmit(formData);
  };

  return (
    <>
      <FormControl fullWidth sx={{my: 1}} variant="outlined">
        <TextField label="Nome" {...register("firstName")} />
      </FormControl>
      <FormControl fullWidth sx={{my: 1}} variant="outlined">
        <TextField label="Nome" {...register("lastName")} />
      </FormControl>
      <FormControl fullWidth sx={{my: 1}} variant="outlined">
        <TextField label="Email" {...register("email")} disabled />
      </FormControl>
      <FormControl fullWidth sx={{my: 1}} variant="outlined">
        <TextField label="Celular" {...register("phone")} />
      </FormControl>

      <Button size="large" fullWidth sx={{my: 2}}
        variant="contained" onClick={handleSubmit(handleRegister)}
      >Atualizar
      </Button>
    </>
  );
}