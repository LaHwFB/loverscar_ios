import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import ButtonBackground from '../../components/stylecomp/ButtonBackground/ButtonBackground';
import HeadingText from '../../components/stylecomp/HeadingText/HeadingText';

class HomeScreen extends Component {

  constructor(props) {
  super(props);
  this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

onNavigatorEvent = event => {
  if (event.type === "NavBarButtonPress") {
    if (event.id === "sideDrawerToggle") {
      this.props.navigator.toggleDrawer({
        side: "left"
      });
    }
  }
};
    GoToHome = () => {
      startMainTabs();
    };

    render () {
        return (
              <View>
                <HeadingText>Welcome to LoversCars </HeadingText>
                <ButtonBackground color='#3862a5' onPress={this.GoToHome}>
                Dive deeper
                </ButtonBackground>
              </View>
        );
    }
}

const styles = StyleSheet.create({
  forgot: {
    marginTop: 15,
    marginLeft: 15,
    textDecorationLine: 'underline',
    color: '#0d3a82'
  },
  testinput: {
    width: '95%',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    margin: 10
  },
  touch:{
    alignSelf: 'flex-start'
  },
  login:{
    display: 'none'
  },
  signin: {
    width: '95%',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    margin: 10
  }
});

export default HomeScreen;
