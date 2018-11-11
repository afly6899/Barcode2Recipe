import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';

export class Salty extends Component{

  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F07%2F12%2Fpork-medallions-ck-1687641-x.jpg%3Fitok%3DVzWQhviK&w=1000&c=sc&poi=face&q=70", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Easy-Pork-Medallions-With-Maple-balsamic-Sauce-2526300') } >Pork Medallions
         </Text>
          <Image source={{uri: "https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/ck/14/03/cant-believe-its-vegan-chili-ck-x.jpg?itok=tiavMceC", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Accidentally-Awesome-Vegan-Chili-With-No-Weird-Ingredients-2465773') } >Vegan Chili
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
