import React from 'react';
import Navigator from "./../Navigator";
import { Provider } from "react-redux";
import { store } from "../Model";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
