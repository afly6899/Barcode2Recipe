import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Bulky, Chocolate, Meat, Combinations, Others, ProteinVitamin, Salty,
  Soft , Starch, Others2, Sweet, Crunchy, Tough, Sugar } from '../components/Recipes';

export default class MoodScreen extends React.Component {
  static navigationOptions = {
    title: 'Mood Screen',
  };

  render() {
    const {navigation} = this.props;
    const input_mood = navigation.getParam('input_mood', "I don't know!");

    return (
      input_mood,
      <ScrollView style={[styles.container, {backgroundColor: SetColor(input_mood)}]}>
        <View style={{
          alignItems: 'stretch',
        }}>
          <Text style={styles.baseText}> You are feeling... </Text>
          <Text style={styles.titleText}> {input_mood} </Text>
          <Text style={styles.baseText}> ~ Bon Appetit ~ </Text>
        </View>
        <RenderRecipes m={input_mood}></RenderRecipes>
      </ScrollView>
    );
  }

}

const RenderRecipes = ({m}) => {
  var mood = m;

  switch(mood) {
    case 'sad': return (<Sugar></Sugar>);
    break;
    case 'happy': return (<Bulky></Bulky>);
    break;
    case 'calm': return (<Bulky></Bulky>);
    break;
    case 'excited': return (<Bulky></Bulky>);
    break;
    case 'stressed': return (
      [
        <Salty></Salty>,
        <Fatty></Fatty>
      ]);
    break;
    case 'romantic': return (<Bulky></Bulky>);
    break;
    case 'angry': return (
      [
        <Meat></Meat>,
        <Tough></Tough>,
        <Crunchy></Crunchy>
      ]);
    break;
    case 'focused': return (<Bulky></Bulky>);
    break;
    case 'frightened': return (<Bulky></Bulky>);
    break;
    default: return(<Text style={styles.errorText}>No Recipes!</Text>);
  }
}

export const SetColor = (m) => {
  var mood = m;

  var color;
  switch(mood) {
    case 'happy': color = 'rgb(255,232,2)';
    break;
    case 'sad': color = 'rgb(-100,149,237)';
    break;
    case 'calm': color = 'rgb(-144,238,144)';
    break;
    case 'excited': color = 'rgb(255,69,0)';
    break;
    case 'stressed': color = 'rgb(255,140,0)';
    break;
    case 'romantic': color = 'rgb(220,20,60)';
    break;
    case 'angry': color = 'rgb(139,0,0)';
    break;
    case 'focused': color = '#00008b';
    break;
    case 'frightened': color = '#e9967a';
    break;
    default: color = 'white';
  }
    return (
        color
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: SetColor(),
  },
  titleText: {
    fontSize: 80,
    fontFamily: 'mightype',
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  baseText: {
    fontSize: 40,
    fontFamily: 'mightype',
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  errorText: {
    fontSize: 40,
    fontFamily: 'mightype',
    textAlign: 'center',
    color: 'red',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  }
});
