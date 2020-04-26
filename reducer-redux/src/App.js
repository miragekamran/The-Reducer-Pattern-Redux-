import React from "react";
import Title from "./components/Title";
import DragonList from "./components/DragonList";
import "./App.css";
import { createStore } from "redux";
import { titleReducer } from "./reducers/titleReducer";
import { Provider } from "react-redux";

let store = createStore(titleReducer);
// console.log(store);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Title />
        <DragonList />
      </div>
    </Provider>
  );
}

export default App;
