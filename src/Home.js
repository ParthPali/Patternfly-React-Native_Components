import React, { Component } from "react";
import { View } from "react-native";

import CustomTabNavigator from "../components/CustomTabNavigator";

export default class Home extends Component {
  static router = CustomTabNavigator.router;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomTabNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}
