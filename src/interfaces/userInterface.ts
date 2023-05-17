export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf?: string;
  cnpj?: string;
}

export interface IAddress {
  id: number;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}