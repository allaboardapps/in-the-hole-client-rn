import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, ProgressIndicator } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    const { errorViewStyle, errorTextStyle } = styles;

    if (this.props.error) {
      return (
        <View style={{errorViewStyle}}>
          <Text style={errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    const { errorViewStyle, errorTextStyle } = styles;

    if (this.props.loading) {
      return (
        <ProgressIndicator size='large' />
      );
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
      >
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            autoCapitalize="none"
            label="Email"
            placeholder="name@example.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            autoCapitalize="none"
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorViewStyle: {
    backgroundColor: 'white',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const MapStateToProps = state => {
  const { email, password, error, loading } = state.auth;

  return {
    email,
    password,
    error,
    loading,
  };
};

export default connect(MapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
