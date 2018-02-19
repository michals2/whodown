// library imports
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

// reducers import
import rootReducer from "./redux/reducers";

// components import
import logo from "./components/logo.js";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    console.log("app loading...");
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.title1}>who</Text>
          <Text style={styles.title2}>down</Text>
          <Text style={styles.title3}>?</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31c1ff",
    alignItems: "center",
    justifyContent: "center"
  },
  title1: {
    color: "#f7c106"
  },
  title2: {
    color: "#ff00fe"
  },
  title3: {
    color: "#6fee26"
  }
});

export default App;
