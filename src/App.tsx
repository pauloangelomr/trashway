import Routes from "./Routes";
import CssBaseline from "@mui/material/CssBaseline";
import {Provider} from "react-redux";
import {store} from "@config/store";

export default function App() {

  return (
    <Provider store={store}>
      <CssBaseline />
      <Routes />
    </Provider>
  );

}
