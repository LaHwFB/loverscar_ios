import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadingText from '../../components/stylecomp/HeadingText/HeadingText';

class Aboutus extends Component {

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

  onRequestClose = () => {
    this.props.navigator.dismissModal({
      screen: "loverscar.Aboutus",
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

    render(){
      return(
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.container}>
        <HeadingText style={styles.HeadingText}>LoversCars : Location de Voitures Tanger</HeadingText>
          <Text style={styles.text}>
            LoversCars est une agence de location de voiture basée à Tanger et qui vous offre un panel de voitures
            de locations dans différentes catégories. Que vous soyez a la recherche de faible consommation, d’espace,
            confort et du style, vous trouverez la voiture de location faite pour vous peu importe votre destination
            et l’usage que vous en ferez.
          </Text>
        </View>
        </ScrollView>

      )
    }
};

const styles=StyleSheet.create({
  container: {
    //backgroundColor: '#a8a59f',
    borderWidth: 3,
    borderColor: '#4c4a47',
    borderRadius: 10,
    marginTop: 10
  },
  HeadingText: {
    textDecorationLine: 'underline',
    //borderWidth: 3,
    //borderColor: '#4c4a47',
    //borderRadius: 10,
    //backgroundColor: '#a8a59f'
  },
  text: {
    marginTop: 15,
    marginLeft: 15,
    color: 'black',
    fontSize: 15,
    //backgroundColor: '#a8a59f'
  }
});

export default Aboutus;
