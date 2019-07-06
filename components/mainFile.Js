/**
 This is main file component which desire to 
 make all the functionalities here...

 **/

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from The main component..</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green"
  },
  textStyle: {
    color: "white",
    fontSize: 20
  }
});
export default MainScreen;
