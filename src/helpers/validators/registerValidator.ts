import {z} from "zod";

const registerFormSchema = {
  firstName: z.string()
    .nonempty("O Nome é obrigatório"),
  lastName: z.string()
    .nonempty("O Nome é obrigatório"),
  email: z.string()
    .nonempty("O email é obrigatório")
    .email(),
  phone: z.string().nonempty("Celular é obrigatório"),
  password: z.string()
    .min(6, "A senha deve conter 6 caracteres"),
  confirmPassword: z.string()
    .min(6, "A senha deve conter 6 caracteres")
};

export const registerCustomerFormSchema = z.object({
  ...registerFormSchema,
  cpf: z.string().min(11, "A O CPF não é válido"),
}).refine(schema => schema.password === schema.confirmPassword, {
  message: "Os campos senha e confirmação de senha estão divergentes",
  path: ["confirmPassword"]
});

export const registerPartnerFormSchema = z.object({
  ...registerFormSchema,
  cnpj: z.string().min(13, "A O CPF não é válido"),
}).refine(schema => schema.password === schema.confirmPassword, {
  message: "Os campos senha e confirmação de senha estão divergentes",
  path: ["confirmPassword"]
});

export type IRegisterCustomerFormData = z.infer<typeof registerCustomerFormSchema>;
export type IRegisterPartnerFormData = z.infer<typeof registerPartnerFormSchema>;