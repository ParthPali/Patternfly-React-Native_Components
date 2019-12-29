import React from 'react';
//import react in our code. 
import { StyleSheet, FlatList, Text, View, Alert } from 'react-native';
//import all the components we are going to use. 
 
export default class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
         { id: '1', value: 'Data list Text 1' },
         { id: '2', value: 'Data list Text 2' },
         { id: '3', value: 'Data list Text 3' },
         { id: '4', value: 'Data list Text 4' },
         { id: '5', value: 'Data list Text 5' },
         { id: '6', value: 'Data list Text 6' },
         ],
    };
  }
  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
    );
  };
  GetItem(item) {
    //Function for click on an item
    Alert.alert(item);
  }
  _renderTitle (title) {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 20}}>{title}</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.MainContainer}>
      {this._renderTitle('DataList')}
        <FlatList
          data={this.state.FlatListItems}
          //data defined in constructor
          ItemSeparatorComponent={this.FlatListItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View>
              <Text
                style={styles.item}
                onPress={this.GetItem.bind(this, 'Id : '+item.id+' Value : '+item.value)}>
                {item.value}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    //marginTop: 30,
  },
 
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});