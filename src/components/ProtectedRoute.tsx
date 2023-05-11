import {Navigate} from "react-router-dom";

interface IProps {
  children: JSX.Element;
}

export default function ProtectedRoute ({children}: IProps): JSX.Element {
  const isLogged = true;

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  return children;
}