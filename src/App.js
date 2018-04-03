import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm>
        </LoginForm>
      </Provider>
    );
  }
}

export default App;
