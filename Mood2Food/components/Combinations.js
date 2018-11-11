import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';

export class Combinations extends Component{

  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Fresh-Fruit-Combo_exps170811_AC2930252A02_21_3bC_RMS-1.jpg", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Summer-Fruit-Combo-683947') } >Fruit Combo
         </Text>
          <Image source={{uri: "http://ohhappydane.com/wp-content/uploads/2015/04/IMG_4184.jpg", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Overnight-Oats-Double-Chocolate-Chia-Combo-1116260') } >Chocolate Chia Combo
            </Text>
            <Image source={{uri: "https://pinchofyum.com/wp-content/uploads/2013/05/quinoa-black-bean-1.jpg", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Southwestern-Bean-Combo-1290829') } >Bean Combo
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
