import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hello From Footer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "skyblue",
    width: "100%"
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20,
    color: "black"
  }
});
