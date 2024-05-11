import Menu from "./components/menu";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Menu />
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
}

export default App;
