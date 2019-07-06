import { Avatar } from "react-native-elements";

import React, { Component } from "react";
import { View } from "react-native";
export default class Profile extends Component {
  render() {
    return (
      <View>
        <Avatar
          rounded
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
          }}
          style={{
            width: 140,
            height: 140,
            marginLeft: 100,
            borderRadius: 50,
            justifyContent: "center",
            paddingTop: 10
          }}
        />
      </View>
    );
  }
}
