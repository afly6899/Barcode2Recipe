import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { MonoText, MighText } from '../components/StyledText';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Mood Screen',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <MighText style={styles.titleText}> Mood </MighText>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 60,
  },
});
