import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteComp from "./Routes/Route";
import Nav from "./components/Nav";
import AuthoriseProvider from "./contextApi/authorise";
function App() {
  return (
    <BrowserRouter>
      <AuthoriseProvider>
        <Nav />
        <RouteComp />
      </AuthoriseProvider>
    </BrowserRouter>
  );
}

export default App;
