import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AddLogo from "../assets/add.png";
export default class Outlook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <View style={styles.navBarButton}>
            <TouchableOpacity>
              <Image
                style={{ marginLeft: 15, width: 20, height: 20 }}
                source={require("../assets/nav.png")}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.navBarHeader}>Alumni App</Text>
          <Text style={styles.navBarButton}>More</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Welcome to Alumni App!</Text>
        </View>

        <View style={styles.tabBar}>
          <View style={[styles.tabBarButton, styles.button1]}>
            <TouchableOpacity>
              <Image
                style={{ marginLeft: 20, width: 40, height: 40 }}
                source={require("../assets/levels.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.tabBarButton, styles.button2]}>
            <TouchableOpacity>
              <Image
                style={{ marginLeft: 20, width: 40, height: 40 }}
                source={require("../assets/house.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.tabBarButton, styles.button3]}>
            <TouchableOpacity>
              <Image
                style={{ marginLeft: 35, width: 50, height: 50 }}
                source={require("../assets/add.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.tabBarButton, styles.button4]}>
            <TouchableOpacity>
              <Image
                style={{ paddingTop: 20, width: 40, height: 40 }}
                source={require("../assets/tools.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.tabBarButton, styles.button5]}>
            <TouchableOpacity>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../assets/location.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#374046",
    width: "100%",
    height: "100%"
  },
  navBar: {
    flexDirection: "row",
    paddingTop: 30,
    height: 64,
    backgroundColor: "#1EAAF1"
  },
  navBarButton: {
    color: "#FFFFFF",
    textAlign: "center",
    width: 64
  },
  navBarHeader: {
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#374046"
  },
  text: {
    color: "#EEEEEE"
  },
  tabBar: {
    height: 50
  },
  tabBarButton: {
    flex: 1
  },
  button1: { backgroundColor: "#1EAAF1" },
  button2: { backgroundColor: "#1EAAF1" },
  button3: { flex: 2, backgroundColor: "#1EAAF1" },
  button4: { backgroundColor: "#1EAAF1" },
  button5: { backgroundColor: "#1EAAF1" },
  tabBar: {
    flexDirection: "row",
    height: 50
  }
});
