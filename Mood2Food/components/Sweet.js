import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';

export class Sweet extends Component{

  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://kirbiecravings.com/wp-content/uploads/2016/09/mochi-ice-cream-033.jpg", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Mochi-Ice-Cream-1902195') } >Mochi Ice Cream
         </Text>
          <Image source={{uri: "https://www.chocolatemoosey.com/wp-content/uploads/2012/09/Nutella-Ice-Cream-No-Cook-Egg-Free-7715.jpg", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Nutella-Ice-cream-1531635') } >Nutella Ice cream
            </Text>
            <Image source={{uri: "https://realhousemoms.com/wp-content/uploads/Lemon-Cake-IG.jpg", width: 130, height: 80}} />   
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Lemon-Cake-2038999') } >Lemon Cake
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