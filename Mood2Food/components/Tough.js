import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';

export class Tough extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://lh5.ggpht.com/FUJMmMkTzoElqK-4HTxxzwof6KRry2HKMg3gI8HMwkNIkfex0TyYVihKv_BZYvQl4d9nnfo4FuPpsqHeiVlO0Q=s320-c-rj-v1-e365", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Hidden-Valley-Candied-Nuts-989445') } >Granola Bars
         </Text>
          <Image source={{uri: "https://images-gmi-pmc.edge-generalmills.com/0082fc25-b75a-4b31-8a69-1a35bd4d62c9.jpg", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crunchy-Garlic-and-Herb-Bread-Sticks-Serious-Eats-280756') } >Bread Sticks
            </Text>
            <Image source={{uri: "https://www.blessthismessplease.com/wp-content/uploads/2016/05/DSC_6017-1-1024x754.jpg", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/5-Ingredient-Granola-Bars-1263149') } >Valley Candied Nuts
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

