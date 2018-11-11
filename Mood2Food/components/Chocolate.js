import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export class Chocolate extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.averiecooks.com/wp-content/uploads/2014/01/redvelvetbarstext.jpg", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Dark-Chocolate-Velvet-Brownies-1238062') } >Velvet Brownies
         </Text>
          <Image source={{uri: "https://www.thefrugalnavywife.com/wp-content/uploads/2015/06/Lazy-Beef-Noodles.jpg", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Dark-Chocolate-Taffy-Flowers-2302396') } >Taffy Flowers
            </Text>
            <Image source={{uri: "https://www.dinneratthezoo.com/wp-content/uploads/2017/10/firecracker-chicken-1.jpg", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Dark-Chocolate-Mousse-1507616') } >Mousse
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
