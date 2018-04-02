import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyC9CT0a_l7mqhJktEso7Q5gVrXvLfzra0E',
      authDomain: 'in-the-hole.firebaseapp.com',
      databaseURL: 'https://in-the-hole.firebaseio.com',
      projectId: 'in-the-hole',
      storageBucket: 'in-the-hole.appspot.com',
      messagingSenderId: '332625647145'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
