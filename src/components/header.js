import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Hello From Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    paddingTop: 2,
    backgroundColor: "skyblue",
    width: "100%"
  },
  textHeader: {
    fontSize: 20,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
});

export default Main;
