import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';
import { StackNavigator } from 'react-navigation';

import AuthScreen from '../AuthScreen/AuthScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import Voitures from '../Voitures/Voitures';
import RegisterScreen from '../RegisterScreen/RegisterScreen';

class SideDrawer extends Component {

    constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

  CloseDrawer = () => {
    this.props.navigator.toggleDrawer({
        to: 'closed',
        side: 'left',
        animated: true
    });
  }

  GoToLogScreen = () => {
        //this.CloseDrawer();
         this.props.navigator.dismissModal({
           screen: "loverscar.AuthScreen",
           passProps: {}, // simple serializable object that will pass as props to the modal (optional)
           animationType: 'slide-down' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
          });

       this.props.navigator.showModal({
         screen: "loverscar.AuthScreen",
         title: "Authenfication",
         passProps: {},
         animationType: 'fade'
        });
       // this.props.navigation.navigate({ screen: 'loverscar.HomeScreen', title: 'HomeScreen'});
     }

     GoToAboutusScreen = () => {
           //this.CloseDrawer();
            this.props.navigator.dismissModal({
              screen: "loverscar.Aboutus",
              passProps: {}, // simple serializable object that will pass as props to the modal (optional)
              animationType: 'slide-down' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
             });

          this.props.navigator.showModal({
            screen: "loverscar.Aboutus",
            title: "Qui Sommes nous ?",
            passProps: {},
            animationType: 'fade'
           });
          // this.props.navigation.navigate({ screen: 'loverscar.HomeScreen', title: 'HomeScreen'});
        }

    render () {
        return (
           <ScrollView style={[
             styles.container,
             { width: Dimensions.get("window").width * 0.8 }
           ]}>

              <View style={styles.drawerHeader}>
              <ImageBackground
              source={require('../../assets/images/images.jpg')}
              style={styles.img} >
                <View style={styles.drawerHeaderTextContainer}>
                  <Text style={[styles.drawerHeaderText ,  {textDecorationLine: 'none', fontWeight: '700'}]}>/</Text>
                </View>
              </ImageBackground>
              </View>

              <TouchableOpacity style={styles.menuItem} onPress={this.GoToLogScreen}>
              <Icon size={30} name='md-log-in' color='black' />
              <Text style={styles.textSide}>Log in / Sign in</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem} onPress={this.GoToAboutusScreen}>
              <Icon size={30} name='ios-help-circle-outline' color='black' />
              <Text style={styles.textSide}>About Us</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
              <Icon size={30} name='ios-people' color='black' />
              <Text style={styles.textSide}>Contact Us</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
              <Icon size={30} name='md-share' color='black' />
              <Text style={styles.textSide}>Invite Friends</Text>
              </TouchableOpacity>

           </ScrollView>
        );
    }
}

// const RootStack = StackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Login: {
//     screen: AuthScreen,
//   },
// });

const styles = StyleSheet.create({
  container: {
     backgroundColor: "white",
     flex: 1,
  },
  drawerHeader: {
    width: Dimensions.get("window").width * 0.8,
    height: 200
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 30
  },
  textSide: {
    fontSize: 20,
    fontWeight: '200',
    marginLeft: 30
  },
  img: {
     width: '100%',
     height: '100%'
  },
  drawerHeaderTextContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    paddingLeft: 25
  },
  drawerHeaderText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    paddingTop: 155,
    paddingLeft: 20,
    textDecorationLine: 'underline'
  }
});

// export default class drawer extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }
export default SideDrawer;
// export default StackNavigator({
// Home:{
// screen:HomeScreen
// },
// Login: {
// screen: AuthScreen
// }
//
// });
