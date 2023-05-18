import {useState, SyntheticEvent} from "react";
import {useSearchParams} from "react-router-dom";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {BaseHeader} from "@components/Header";
import Link from "@components/Link";
import {IRegisterCustomerFormData, IRegisterPartnerFormData} from "@helpers/validators/registerValidator";
import RegisterCustomerForm from "./RegisterCustomerForm";
import RegisterPartnerForm from "./RegisterPartnerForm";

export default function RegisterView() {
  const [searchParams] = useSearchParams();
  const [tabIndex, setTabIndex] = useState(searchParams.get("role") === "partner" ? 1 : 0);

  const handleChange = (_ev: SyntheticEvent, valueIndex: number) => setTabIndex(valueIndex);

  const handleRegister = ({confirmPassword, ...formData}: IRegisterCustomerFormData | IRegisterPartnerFormData) => {
    console.log(formData);
  };

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
            <RegisterCustomerForm onSubmit={handleRegister} />
          )}
          {tabIndex === 1 && (
            <RegisterPartnerForm onSubmit={handleRegister}/>
          )}
          <Link to="/login">Já tenho uma conta</Link>
        </Paper>
      </Container>
    </>
  );
}