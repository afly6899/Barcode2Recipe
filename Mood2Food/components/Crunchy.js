import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';

export class Crunchy extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://cdn.apartmenttherapy.info/image/fetch/w_800,c_fit/https://s3.amazonaws.com/pixtruder/original_images/267dc5d88ea63cb39ca68a6633ecdee55fc35fe6", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crunchy-Microwave-Potato-Chips-1290788') } >Microwave Potato Chips
         </Text>
          <Image source={{uri: "http://apple-of-my-eye.com/wp-content/uploads/2016/03/Crispy-Snack-Edamame-3-1.jpg", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crunchy-Edamame-1945385') } >Crunchy Edamame
            </Text>
            <Image source={{uri: "https://cdn.cdkitchen.com/recipes/images/2013/11/118764-3247-mx.jpg", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crispy-Crunchy-Crouton-Sticks-972226') } >Crispy Crouton Sticks
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

