import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export class Soft extends Component{

  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://s-media-cache-ak0.pinimg.com/originals/f7/35/80/f73580b26ffb1ebea3872779b7b2842e.jpg", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Soft-Homemade-Slider-Buns-2181607') } >Soft Slider Buns
         </Text>
          <Image source={{uri: "https://bakingamoment.com/wp-content/uploads/2018/08/IMG_9365-best-monster-cookies-square.jpg", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Soft-Monster-Cookies-1801838') } >Soft Monster Cookies
            </Text>
            <Image source={{uri: "https://barefeetinthekitchen.com/wp-content/uploads/2015/12/crispy-cheese-bacon-potatoes-7.jpg", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crispy-Cheese-and-Bacon-Potatoes-2245614') } >Cheese&Bacon Potatoes
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
