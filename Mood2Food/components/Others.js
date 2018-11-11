import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from 'react-native';

export class Others extends Component{

  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://belleofthekitchen.com/wp-content/uploads/2016/03/garlic-parmesan-roasted-asparagus-square.jpg", width: 100, height: 60}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Asparagus-998165') } >Asparagus
         </Text>
          <Image source={{uri: "https://www.skinnytaste.com/wp-content/uploads/2017/09/Chickpea-Avocado-Salad-1-2.jpg", width: 100, height: 60}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Avocado-Salad-2505275') } >Avocado Salad
            </Text>
            <Image source={{uri: "http://www.justsotasty.com/wp-content/uploads/2016/03/Blueberry-Crumble-Bars-2.jpg", width: 100, height: 60}} />
           <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Blueberry-Crumb-Bars-1838585') } >Blueberry Crumb Bars
          </Text>
         <Image source={{uri: "https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201803/0027/img77l.jpg", width: 100, height: 60}} />
           <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Roasted-Spiced-Walnuts-1575551') } >Roasted Spiced Walnuts
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
