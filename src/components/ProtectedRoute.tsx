import {Navigate} from "react-router-dom";
import {useAppSelector} from "@hooks/useAppSelector";
import {selectUser} from "@store/user/userSelectors";

interface IProps {
  children: JSX.Element;
}

export default function ProtectedRoute ({children}: IProps): JSX.Element {
  const {isLogged} = useAppSelector(selectUser);

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
}