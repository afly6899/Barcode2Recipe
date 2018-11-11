import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';

export class Sugar extends Component{

  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.simplyrecipes.com/wp-content/uploads/2015/04/easy-beef-brisket-vertical-a2-1200.jpg", width: 100, height: 60}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.simplyrecipes.com/recipes/beef_brisket/?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly') } >Vanilla Sponge Cake
         </Text>
          <Image source={{uri: "https://lh3.googleusercontent.com/Nrlk9TRbT994U2zMUqbPICud-GjtQDt80ojVSd6xy2ZEC-m32aDYUw5Sm1BDHCePZNyE9d-ej5_zKcaHh87dyqM=s320-c-rj-v1-e365", width: 100, height: 60}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/4-Ingredient-Flourless-Chocolate-Cookies-_Low-FODMAP_-2086121') } >Chocolate Cookies
            </Text>
            <Image source={{uri: "https://www.thekitchensnob.com/wp-content/uploads/2014/06/chocolate-lasagna-6.jpg", width: 100, height: 60}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Chocolate-lasagna-334802') } >Chocolate Lasagna
          </Text>
        <Image source={{uri: "https://christinascucina.com/wp-content/uploads/2014/01/IMG_4471-660.jpg", width: 100, height: 60}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Sugared-Donuts-1111182') } >Sugared Donuts
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