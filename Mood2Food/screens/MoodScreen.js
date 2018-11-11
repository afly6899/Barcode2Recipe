import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Bulky, Chocolate, Meat, Combinations, Others, ProteinVitamin, Salty,
  Starch, Sugar, Sweet, Tough, Others2 } from '../components/Recipes';

export default class MoodScreen extends React.Component {
  static navigationOptions = {
    title: 'Mood Screen',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{
          alignItems: 'stretch',
        }}>
          <Text style={styles.baseText}> You are feeling... </Text>
          <Text style={styles.titleText}> happy </Text>
          <Text style={styles.baseText}> ~ Bon Appetit ~ </Text>
        </View>
        <Bulky> </Bulky>
        <Chocolate> </Chocolate>
      </ScrollView>
    );
  }

}

export const SetColor = () => {
  var mood = 'happy';
  var color;

  switch(mood) {
    case 'happy': color = 'rgb(255,255,0)';
    break;
    default: 'white';
  }
    return (
        color
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: SetColor(), // parameterize the bkg color
  },
  titleText: {
    fontSize: 80,
    fontFamily: 'mightype',
    textAlign: 'center',
    color: 'white',
  },
  baseText: {
    fontSize: 40,
    fontFamily: 'mightype',
    textAlign: 'center',
    color: 'white',
  }
});
