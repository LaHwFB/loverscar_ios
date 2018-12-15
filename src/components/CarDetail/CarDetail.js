import React from 'react';
import { View, Text, StyleSheet, Image, Modal, Button, TouchableOpacity, Switch, NavigatorIOS } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import SwitchButton from 'switch-button-react-native';
import startMainTabs from '../../screens/MainTabs/startMainTabs'
import AuthScreen from '../../screens/AuthScreen/AuthScreen'
import { Navigation } from 'react-navigation';

import ButtonBack from '../stylecomp/ButtonBack/ButtonBack';
const CarDetail= props => {

  let ModalContent=null;

  GoToCar = () => {
    this.setState(prevState => {
      return{
        selectedCar : null
      }
    })
  };


  if(props.selectedCar){
    ModalContent=(
      <View>
      <View style={styles.container}>

          <ButtonBack onPress={props.onModalClosed}/>
          <View style={{alignSelf:'center'}}>
            <Text style={styles.carName}>{props.selectedCar.name}</Text>
          </View>
      </View>
        <Image resizeMode='cover' source={props.selectedCar.image} style={styles.img}/>
      </View>
    );
  }

  return(
    <View>
    <Modal visible={props.selectedCar !== null} animationType='slide'>
      <View>
        {ModalContent}
        <View>
        <View style={styles.notificbar}>
        <Text style={{fontSize:20, color:'black', marginLeft: 10}}>Get notification for this car</Text>
        <SwitchButton
              onValueChange={ (val) => {props.rented=val; console.log(val);}}      // this is necessary for this component
              text1 = 'OFF'                       // optional: first text in switch button --- default ON
              text2 = 'ON'                        // optional: second text in switch button --- default OFF
              switchWidth = {100}                 // optional: switch width --- default 44
              switchHeight = {30}                 // optional: switch height --- default 100
              switchdirection = 'ltr'             // optional: switch button direction ( ltr and rtl ) --- default ltr
              switchBorderRadius = {100}          // optional: switch border radius --- default oval
              switchSpeedChange = {400}           // optional: button change speed --- default 100
              switchBorderColor = '#d4d4d4'       // optional: switch border color --- default #d4d4d4
              switchBackgroundColor ='#fff'       // optional: switch background color --- default #fff
              btnBorderColor = '#4c4a47'          // optional: button border color --- default #00a4b9
              btnBackgroundColor = '#a8a59f'      // optional: button background color --- default #00bcd4
              fontColor = '#b1b1b1'               // optional: text font color --- default #b1b1b1
              activeFontColor = '#fff'            // optional: active font color --- default #fff
              style={{alignSelf: 'center'}}
          />
          </View>
          <Text>{props.rented}</Text>
          <Button title='Rent This Car' onPress={()=>console.log('pressed')}/>
        </View>
      </View>
    </Modal>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    paddingTop: 15,
    borderTopWidth: 1,
    backgroundColor: '#f2f3f4',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width:'100%',
    height: 200
  },
  carNameContainer: {
    justifyContent:'center',
    marginTop:10,
    marginBottom:10,
  },
  carName:{
    fontSize: 20,
    fontWeight:'bold',
    color:'black',
    marginTop:10,
    marginBottom:10,
  },
  icon: {
    marginLeft: 10,
    marginTop:10,
    marginBottom:10,
    marginRight: 100
  },
  notificbar:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom: 10,
    marginTop: 10
  },
});

export default CarDetail;
