import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ImageBackgroundFine from "../assets/hospital.png";

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerCard}>
          <View style={styles.viewCard}>
            <Text style={styles.textHeader}>1</Text>
          </View>
          <View style={styles.viewCard}>
            <Text style={styles.textHeader}>2</Text>
          </View>
          <View style={styles.viewCard}>
            <Text style={styles.textHeader}>3</Text>
          </View>
        </View>
        <View style={styles.viewBody}>
          <ImageBackground
            source={ImageBackgroundFine}
            style={styles.bodyBackground}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "white",
    width: "100%"
  },
  headerCard: {
    flex: 0.5,
    paddingTop: 30,
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row"
  },
  textHeader: {
    fontSize: 20,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  viewCard: {
    flex: 0.3,
    borderRadius: 20,
    borderWidth: 2,
    shadowColor: "black",
    shadowRadius: 10,
    alignItems: "center",
    borderColor: "skyblue",
    fontSize: 20,
    width: "35%",
    height: "60%",
    marginLeft: 20,
    borderColor: "steelblue",
    borderWidth: 2
  },
  viewBody: {
    borderRadius: 20,
    alignItems: "center",
    fontSize: 20,
    width: "90%",
    height: "55%",
    marginLeft: 20
  },
  bodyBackground: {
    width: "100%",
    height: "100%"
  }
});

export default Main;
