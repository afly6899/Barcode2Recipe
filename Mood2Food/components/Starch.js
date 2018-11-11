import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Meat extends Component{

  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://strengthandsunshine.com/wp-content/uploads/2018/10/Air-Fryer-Potato-Latkes-1.jpg", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crispy-Air-Fryer-Gluten-Free-Vegan-Potato-Latkes-_Allergy-Free_-Paleo_-2583328') } >Potato Latkes
         </Text>
          <Image source={{uri: "https://pbs.twimg.com/media/C6ilebbVsAAfEwH.jpg", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Fereni-Starch-Pudding-Allrecipes') } >Fereni Starch Pudding
            </Text>
            <Image source={{uri: "https://cdn.cdkitchen.com/recipes/images/2016/02/53827-4539-mx.jpg", width: 130, height: 80}} />   
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Wheat-Starch-Dough-Wrappers-1532172') } >Wheat Dough Wrappers
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