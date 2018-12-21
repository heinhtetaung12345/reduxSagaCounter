import React, { Component } from "react";
import { Platform } from "react-native";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import allReducers from "./src/reducers"; //in reducers/index.js
import CounterContainer from "./src/containers/CounterContainer";
import root from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(root);
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
  }
}
