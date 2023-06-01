import {z} from "zod";

const profileFormSchema = {
  name: z.string()
    .nonempty("O Nome é obrigatório"),
  email: z.string()
    .nonempty("O email é obrigatório")
    .email(),
  phone: z.string().nonempty("Celular é obrigatório")
};

export const profileCustomerFormSchema = z.object({
  ...profileFormSchema,
  cpf: z.string().min(11, "A O CPF não é válido"),
});

export const profilePartnerFormSchema = z.object({
  ...profileFormSchema,
  cnpj: z.string().min(13, "A O CPF não é válido"),
});

export type IProfileCustomerFormData = z.infer<typeof profileCustomerFormSchema>;
export type IProfilePartnerFormData = z.infer<typeof profilePartnerFormSchema>;