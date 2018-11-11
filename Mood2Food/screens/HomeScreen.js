import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Button, ButtonGroup } from 'react-native-elements';
import { SetColor } from './MoodScreen';

import { createStackNavigator } from 'react-navigation';

import { MonoText, MighText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  // onPress (mood) {
  //   Alert.alert(mood)
  //   SetColor('happy')
  // }

  render() {
    const buttons = ['Hello', 'World', 'Buttons']
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/Emoji/happy-emoji.png')}
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.logoContainer}>
            <MighText style={styles.logoText}> Mood2Food </MighText>
          </View>

          <View style={styles.buttonStyleContainer}>
            <Button
              raised
              title='HAPPY'
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 70,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={() => this.props.navigation.navigate('Links',
                                                             {input_mood: 'happy'})}
              />
          </View>

          <View style={styles.buttonStyleContainer}>
            <Button
              raised
              title='SAD'
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 70,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={() => this.props.navigation.navigate('Links',
                                                             {input_mood: 'sad'})}
              />
          </View>

          <View style={styles.buttonStyleContainer}>
            <Button
              raised
              title='CALM'
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 70,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={() => this.props.navigation.navigate('Links',
                                                             {input_mood: 'calm'})}
               />
          </View>

          <View style={styles.buttonStyleContainer}>
            <Button
              raised
              title='EXCITED'
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 70,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={() => this.props.navigation.navigate('Links',
                                                             {input_mood: 'excited'})}
              />
          </View>

          <View style={styles.buttonStyleContainer}>
            <Button
              raised
              title='STRESSED'
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 70,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={() => this.props.navigation.navigate('Links',
                                                             {input_mood: 'stressed'})}
              />
          </View>

          <View style={styles.buttonStyleContainer}>
            <Button
              raised
              title='ROMANTIC'
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 70,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={() => this.props.navigation.navigate('Links',
                                                             {input_mood: 'romantic'})}
              />
          </View>

          <View style={styles.buttonStyleContainer}>
            <Button
              raised
              title='ANGRY'
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 70,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={() => this.props.navigation.navigate('Links',
                                                             {input_mood: 'angry'})}
              />
          </View>

          <View style={styles.buttonStyleContainer}>
            <Button
              raised
              title='FOCUSED'
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 70,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={() => this.props.navigation.navigate('Links',
                                                             {input_mood: 'focused'})}
              />
          </View>

          <View style={styles.buttonStyleContainer}>
            <Button
              raised
              title='FRIGHTENED'
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 70,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={() => this.props.navigation.navigate('Links',
                                                             {input_mood: 'frightened'})}
              />
          </View>

        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb6c1',
  },
  logoContainer: {
    marginTop: 10,
    marginBottom:20,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 70,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.4)',
  },
  buttonStyleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#f39c12',
    backgroundColor: "transparent",
    justifyContent: 'space-between',
    paddingTop: 10
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
