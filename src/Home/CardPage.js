import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import Button from 'react-native-button';

import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardAction
} from 'react-native-card-view';

export default class CardPage extends Component {

  _renderTitle (title) {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 20}}>{title}</Text>
      </View>
    )
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this._renderTitle('Basic Card')}
          <Card>
            <CardTitle>
              <Text style={styles.title}>Card Title</Text>
            </CardTitle>
            <CardContent>
              <Text>Content</Text>
            </CardContent>
            <CardAction >
              <Button
                style={styles.button}
                onPress={() => {}}>
                Button 1
              </Button>
              <Button
                style={styles.button}
                onPress={() => {}}>
                Button 2
              </Button>
            </CardAction>
          </Card>

          {this._renderTitle('Card with Image and Action')}
          <Card>
            <CardImage>
              <Image
                style={{width: 300, height: 200}}
                source={{uri: 'https://st4.depositphotos.com/4296781/20597/i/1600/depositphotos_205971168-stock-photo-cityscape-view-san-francisco-bay.jpg'}}
              />
            </CardImage>
            <CardTitle>
              <Text style={styles.title}>Golden Gate Bridge</Text>
            </CardTitle>
            <CardContent>
              <Text>The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean. The structure links the American city of San Francisco, California—the northern tip of the San Francisco Peninsula—to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait.</Text>
            </CardContent>
            <CardAction>
              <Button
                style={styles.button}
                onPress={() => {}}>
                Button 1
              </Button>
              <Button
                style={styles.button}
                styleDisabled={{color: 'red'}}
                onPress={() => {}}>
                Button 2
              </Button>
            </CardAction>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginBottom: 60
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  }
});