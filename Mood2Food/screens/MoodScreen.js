import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { MonoText, MighText } from '../components/StyledText';
import { Bulky, Chocolate, Meat, Combinations, Others, ProteinVitamin, Salty,
  Starch, Sugar, Sweet, Tough } from '../components/Recipes';

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
          <MighText style={styles.baseText}> You are feeling... </MighText>
          <MighText style={styles.titleText}> happy </MighText>
          <MighText style={styles.baseText}> ~ Bon Appetit ~ </MighText>
        </View>
        <Bulky> </Bulky>
        <Chocolate> </Chocolate>
      </ScrollView>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'skyblue', // parameterize the bkg color
  },
  titleText: {
    fontSize: 80,
    textAlign: 'center',
    color: 'white',
  },
  baseText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  }
});
