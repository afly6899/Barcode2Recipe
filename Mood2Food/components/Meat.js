import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from 'react-native';

export class Meat extends Component{

  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.simplyrecipes.com/wp-content/uploads/2015/04/easy-beef-brisket-vertical-a2-1200.jpg", width: 100, height: 60}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.simplyrecipes.com/recipes/beef_brisket/?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly') } >Beef Brisket
         </Text>
          <Image source={{uri: "https://www.thefrugalnavywife.com/wp-content/uploads/2015/06/Lazy-Beef-Noodles.jpg", width: 100, height: 60}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Lazy-Beef-_-Noodles-2501773') } >Beef & Noodles
            </Text>
            <Image source={{uri: "https://www.dinneratthezoo.com/wp-content/uploads/2017/10/firecracker-chicken-1.jpg", width: 100, height: 60}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Firecracker-Chicken-1864671') } >Firecracker Chicken
          </Text>
        <Image source={{uri: "https://www.iheartnaptime.net/wp-content/uploads/2017/05/Hawaiian-meatballs-i-heart-naptime.jpg", width: 100, height: 60}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Hawaiian-Meatballs-2345661') } >Hawaiian Meetballs
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
