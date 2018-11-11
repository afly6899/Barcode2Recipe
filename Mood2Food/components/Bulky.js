import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export class Bulky extends Component {
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://prettysimplesweet.com/wp-content/uploads/2014/04/Peanut-Butter-Chocolate-Chip-Pancakes-2.jpg", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Peanut-Butter-Chocolate-Chip-Pancakes-1498252') } >Peanut Butter Pancakes
         </Text>
          <Image source={{uri: "https://dwumenp4rf1cd.cloudfront.net/wp-content/uploads/2017/04/Easy-and-Allergy-Friendly-Cucumber-and-Avocado-Sushi-Rolls-678x381.png", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Cucumber-and-Avocado-Quick-Nori-Roll-2300489') } >Nori Roll
            </Text>
            <Image source={{uri: "https://cdn.cdkitchen.com/recipes/images/2016/02/53827-4539-mx.jpg", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Roast-Beef-Sandwich-with-Creamy-Horseradish-2217435') } >Roast Beef Sandwich
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
