import { Provider, useSelector } from "react-redux"
import { RootState, store } from "./state/store"
import { BrowserRouter } from "react-router-dom";
import RoutesSite from "./config/RoutesSite";
import Navbar from "./components/NavBar";
import MainSpace from "./components/Main";

function App() {

  console.log(localStorage.getItem("name"));

  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainSpace/>
      </Provider>
    </BrowserRouter>

  )
}

export default App
