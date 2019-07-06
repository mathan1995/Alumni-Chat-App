/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { Input } from "react-native-elements";

const userInfo = { username: "admin", password: "1234" };

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              "https://img.icons8.com/cute-clipart/64/000000/login-rounded-right.png"
          }}
          style={{ width: 140, height: 140 }}
        />
        <Input
          style={styles.welcome}
          placeholder="Username "
          onChangeText={username => {
            this.setState({ username });
          }}
          value={this.state.username}
        />
        <Input
          style={styles.welcome}
          placeholder="Password "
          secureTextEntry={true}
          onChangeText={password => {
            this.setState({ password });
          }}
          value={this.state.password}
        />
        <Text style={styles.errorInfo} value={this.state.errorMessage} />
        <TouchableOpacity style={styles.loginButton} onPress={this.signIn}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Signup Here !!</Text>
        </TouchableOpacity>
      </View>
    );
  }

  Test = async () => {
    alert("Hello Test function");
  };

  signIn = async () => {
    if (this.state.username === "" && this.state.password === "") {
      await await alert("please fill these data out");
    } else {
      if (
        userInfo.username === this.state.username &&
        userInfo.password === this.state.password
      ) {
        await await alert("Logged !!!");
      } else {
        await await alert("Username or password incorrect");
        this.setState({ username: "" });
        this.setState({ password: "" });
      }
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  text: {},
  welcome: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: "white"
  },
  viewSecondary: {
    backgroundColor: "black",
    flex: 1
  },
  textLatest: {
    color: "black",
    fontSize: 10,
    fontWeight: "bold",
    alignItems: "center"
  },
  loginButtonText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    color: "white"
  },
  loginButton: {
    margin: 50,
    borderRadius: 50,
    backgroundColor: "#009FFF",
    borderColor: "black",
    width: "50%",
    height: 40,
    padding: 5
  },
  errorInfo: {
    color: "red",
    fontSize: 20
  }
});
