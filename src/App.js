import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { Provider } from "react-redux";
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;