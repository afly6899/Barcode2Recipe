import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';

export class ProteinVitamin extends Component{

  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.mycolombianrecipes.com/wp-content/uploads/2009/08/Salmon-con-Naranja.jpg", width: 100, height: 60}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Orange-Salmon-2060197') } >Orange Salmon
         </Text>
          <Image source={{uri: "https://www.whats4eats.com/files/fish-fish-chips-flickr-10413717%40N08-Smabs-Sputzer-9355126330-4x3.jpg", width: 100, height: 60}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/English-Fish-_n-Chips-1005960') } >English Fish & Chips
            </Text>
            <Image source={{uri: "http://3.bp.blogspot.com/-lxkVRbvXsFU/UMjSH4Owq6I/AAAAAAAACPA/I59PNux4LfE/s1600/030+vitamin+vegetable+soup.jpgZ", width: 100, height: 60}} />
           <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Vitamin-Soup-1445401') } >Vitamin Soup
          </Text>
         <Image source={{uri: "https://img-aws.ehowcdn.com/350x235p/photos.demandstudios.com/227/57/fotolia_9512288_XS.jpg", width: 100, height: 60}} />
           <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Vitamin-C-Fruit-Smoothie-2546565') } >Vitamin Fruit Smoothie
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
