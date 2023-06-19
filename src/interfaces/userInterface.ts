export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cpf?: string;
  cnpj?: string;
  orders: any[];
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