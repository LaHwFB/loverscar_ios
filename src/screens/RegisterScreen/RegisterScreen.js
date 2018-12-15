import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/stylecomp/DefaultInput/DefaultInput';
import ButtonBackground from '../../components/stylecomp/ButtonBackground/ButtonBackground';
import HeadingText from '../../components/stylecomp/HeadingText/HeadingText';
import Icon from 'react-native-vector-icons/Ionicons';

class RegisterScreen extends Component {

  componentDidMount() {
  Icon.getImageSource('md-arrow-back', 27,"black").then((back) => {
                  this.props.navigator.setButtons({
                      leftButtons: [
                          { id: 'back', icon: back },
                      ]
                  });
              });
            }
  constructor(props) {
  super(props);
  this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
}

onRequestClose = () => {
  this.props.navigator.dismissModal({
    screen: "loverscar.RegisterScreen",
    passProps: {},
    animationType: 'slide-down'
   });
}

onNavigatorEvent = event => {
  if (event.type === "NavBarButtonPress") {
    if (event.id === "sideDrawerToggle") {
      this.props.navigator.toggleDrawer({
        side: "left"
      });
    }
    if (event.id === "back") {
      this.onRequestClose();
    }
  }
};

static navigationOptions = {
 headerLeft: (
   <Button
     onPress={() => alert('This is a button!')}
     title="Info"
     color="black"
   />
 ),
};
    GoToHome = () => {
      startMainTabs();
    };

    render () {
        return (
              <View style={{backgroundColor: 'white', flex: 1}}>
                <HeadingText>Creez votre compte </HeadingText>
                <DefaultInput placeholder='Email'/>
                <DefaultInput placeholder='Password' />
                <DefaultInput placeholder='ConfirmPassword'/>
                <ButtonBackground color='#3862a5' onPress={this.GoToHome}>
                Inscription
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
  }
});

export default RegisterScreen;
