import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';

export class Others2 extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://lh3.googleusercontent.com/rCZxHz3ZHOb3lzl5AcqiMcSD94TV_T8WdVc0bQqFTozQACDIjPemV1c5NCNLuz7g2cyYKCsWZHxotAHRuEPruQ=s320-c-rj-v1-e365", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Healthy-Mango-Strawberry-Smoothie-1120573') } >Mango Smoothie
         </Text>
          <Image source={{uri: "https://lh3.googleusercontent.com/oAX4MwfSBq9W2eT49W0GMZzXKv5J6WWyvhmXr0r9r_y1mbTFz0h6DrwVa98jppgfmvKxyykrudwAGizZAxdwYpA=s320-c-rj-v1-e365", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Chamomile-_-Turmeric-Evening-Tea-1390087') } >Chamomile Tea
            </Text>
            <Image source={{uri: "https://lh3.googleusercontent.com/bgSZ4EOoT-DE958aNZsdUlmFO1pHDT36S5SVgC1AEUaEl4Xbv0dqsvFOqPFW7D0NZr50Fku11VQWBA6rj8QYqp4=s320-c-rj-v1-e365", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Tropical-Oatmeal-2541828') } >Tropical Oatmeal
          </Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container:{
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextStyle: {
    color: '#000080',
    textDecorationLine: 'underline'
  }
});