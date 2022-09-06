import "./App.scss";
import { Provider } from "react-redux";
import store from "./store/store";

import Router from "./router/router";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router></Router>
      </div>
    </Provider>
  );
}

export default App;
