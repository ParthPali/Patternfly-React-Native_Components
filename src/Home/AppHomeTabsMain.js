import React, { Component } from "react";
import { Button, View, Image, Text } from "react-native";

export default class Main extends Component {
  render() {
    return (
      <View style={{ width:"100%",height:"100%",backgroundColor: "white" ,alignItems: 'center'}}>
        <Text style={{alignSelf:"center", fontSize: 40, padding:16}}>Demo of React Native Components</Text>
        <Image
                style={{width: 300, height: 200}}
                source={{uri: 'https://azabost.com/wp-content/uploads/2017/10/react-native-logo.jpg'}}
              />
      </View>
    );
  }
}
