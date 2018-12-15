import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet, Platform} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/stylecomp/DefaultInput/DefaultInput';
import ButtonBackground from '../../components/stylecomp/ButtonBackground/ButtonBackground';
import HeadingText from '../../components/stylecomp/HeadingText/HeadingText';
import RegisterScreen from '../RegisterScreen/RegisterScreen'
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonBack from '../../components/stylecomp/ButtonBack/ButtonBack';

class AuthScreen extends Component {

    componentDidMount() {
    Icon.getImageSource('md-arrow-back', 27,"black").then((back) => {
                    this.props.navigator.setButtons({
                        leftButtons: [
                            { id: 'back', icon: back },
                        ]
                    });
                });
              }

  //   static navigatorButtons = {
  //   leftButtons: [
  //     {
  //       //icon: this.BackIcon,
  //       //icon: require('../../assets/icons/_ionicons_svg_ios-arrow-round-back'),
  //       id: 'back' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
  //     }
  //   ]
  // };

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
    if (event.id === "back") {
      this.onRequestClose();
    }
  }
};

    GoToHome = () => {
      startMainTabs();
    };

    Createaccount = () => {
      // this.props.navigator.dismissModal({
      //   screen: "loverscar.AuthScreen",
      //   passProps: {}, // simple serializable object that will pass as props to the modal (optional)
      //   animationType: 'fade' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      //  });

      this.props.navigator.showModal({
        screen: "loverscar.RegisterScreen",
        title: "Register",
        passProps: {},
        animationType: 'fade'
       });
    }

     onRequestClose = () => {
      this.props.navigator.dismissModal({
        screen: "loverscar.AuthScreen",
        passProps: {},
        animationType: 'slide-down'
       });
     }

     forgetmdp = () => {
      this.props.navigator.showModal({
        screen: "loverscar.Forgetpass",
        title: "Reinitialiser mdp",
        passProps: {},
        animationType: 'fade'
       });
    }

    render () {
        return (
              <View style={{backgroundColor: 'white', flex: 1}}>
                <HeadingText> Connectez Vous </HeadingText>
                <DefaultInput placeholder='Email'/>
                <DefaultInput placeholder='Password' />
                <ButtonBackground color='#3862a5' onPress={this.GoToHome}>
                Connexion
                </ButtonBackground>
                <View>
                  <TouchableOpacity style={styles.touch} onPress={this.forgetmdp}>
                    <Text style={styles.forgot}>Forgot password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.touch} onPress={this.Createaccount}>
                    <Text style={styles.forgot}>Creer votre compte</Text>
                  </TouchableOpacity>
                </View>
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

export default AuthScreen;
