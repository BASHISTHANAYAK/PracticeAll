import "./App.css";
import Form from "./Components/Form";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import DisplayPage from "./Components/DisplauPage";
function App() {
  return (
    <Provider store={store}>
      <Form />
      <DisplayPage />
    </Provider>
  );
}

export default App;
