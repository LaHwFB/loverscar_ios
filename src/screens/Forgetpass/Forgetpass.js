import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import Icon from 'react-native-vector-icons/Ionicons';

import DefaultInput from '../../components/stylecomp/DefaultInput/DefaultInput';
import ButtonBackground from '../../components/stylecomp/ButtonBackground/ButtonBackground';
import HeadingText from '../../components/stylecomp/HeadingText/HeadingText';

class Forgetpass extends Component{

  constructor(props) {
  super(props);
  this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
}
  componentDidMount() {
  Icon.getImageSource('md-arrow-back', 27,"black").then((back) => {
                  this.props.navigator.setButtons({
                      leftButtons: [
                          { id: 'back', icon: back },
                      ]
                  });
              });
            }
  mdp = () =>{
    console.log('yeahhhh');
  }

  onRequestClose = () => {
    this.props.navigator.dismissModal({
      screen: "loverscar.Forgetpass",
      passProps: {},
      animationType: 'slide-down'
     });
  }

  onNavigatorEvent = event => {
      if (event.id === "back") {
        this.onRequestClose();
      }
  };

  GoToHome = () => {
    startMainTabs();
  };

  render(){
    return(
      <View style={{backgroundColor: 'white', flex: 1}}>
        <HeadingText>Entrez votre Email pour recuperer votre mot de passe</HeadingText>
        <DefaultInput placeholder='Email'/>
        <ButtonBackground color='#3862a5' onPress={this.GoToHome}>
        Recuperer mdp
        </ButtonBackground>
      </View>

    )
  }
};

export default Forgetpass;
