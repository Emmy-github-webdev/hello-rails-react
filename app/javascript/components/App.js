import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Greeting from "./Greeting";
import HelloWorld from './HelloWorld'
import { Provider } from "react-redux";
import store from "../redux/configureStore";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
          <Route path="/hello" element={<HelloWorld greeting="Friend"/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
