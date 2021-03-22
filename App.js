import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './src/Todo';
import Store from './src/store/index'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

class App extends Component {
  state = {}
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Todo />
        </Provider>
      </View>
    );
  }
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
