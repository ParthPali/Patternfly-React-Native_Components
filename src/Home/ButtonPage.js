import React from 'react';
//import react in our code. 
import { Button, View, StyleSheet, Text , TouchableOpacity} from 'react-native';
//import all the components we are going to use. 
export default class App extends React.Component {
  onPressbutton1(){
    //For generating alert on buttton click
    alert('Hello from sample button #1');
  }
  onPressbutton2(){
    //For generating alert on buttton click
    alert('Hello from sample button #2');
  }
  render() {
    return (
      // enclose all components in this View tag
      <View style={styles.container}>
        {/* View is used here to wrap all component in one */}
        <Text style={{fontSize: 20}}>Button Examples:</Text>
        <Button
          title="Sample Button #1 Click Me"
          onPress={this.onPressbutton1}
        />
        <TouchableOpacity>
            <Text style = {styles.text} onPress={this.onPressbutton2}>
               Sample Button #2 Click Me
            </Text>
         </TouchableOpacity>
      </View>
    );  
  } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      borderWidth: 0,
      padding: 16,
      backgroundColor: 'skyblue'
   }
});