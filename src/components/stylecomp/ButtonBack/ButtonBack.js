import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet,
  Platform
} from "react-native";
import { Navigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import startMainTabs from '../../../screens/MainTabs/startMainTabs';
import Voitures from '../../../screens/Voitures/Voitures';

const ButttonBack = (props) =>{
  GoToHome=()=>{
    startMainTabs();
  }

  return(
  <TouchableOpacity style={styles.icon} onPress={props.onPress}>
    <Icon size={25} name='md-arrow-back' color='black' />
  </TouchableOpacity>
  );
};

const styles=StyleSheet.create({
  icon: {
    marginLeft: 10,
    marginTop:10,
    marginBottom:10,
    marginRight: 100
  },
});


export default ButttonBack;
