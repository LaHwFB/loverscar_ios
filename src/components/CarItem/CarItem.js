import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const CarItem = props => (
  <TouchableOpacity onPress={props.onItemPressed} >
    <View style={styles.listItem}>
      <View style={styles.nm_img}>
        <Text style={styles.carName}>{props.carName}</Text>
        <Image resizeMode='cover' source={props.carImage} style={styles.img}/>
      </View>

      <View style={styles.carInfo}>
        <Icon size={20} name='md-trash' color='black'/>
        <Text style={styles.font}>{props.sieges}</Text>
        <Text style={styles.font}>{props.portes}</Text>
      </View>

    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    height: 150,
    width: "100%",
    flexDirection: 'row',
    //borderWidth: 1,
    backgroundColor: '#eee',
    marginBottom:10,
  },
  img: {
    width:'100%',
    height:'80%',
  },
  carName:{
    fontSize: 20,
    fontWeight:'bold',
    color:'black',
    marginLeft:10,
    marginBottom:5,
  },
  nm_img : {
    width:'50%',
    flexDirection: 'column',
    //height:"100%"
  },
  carInfo:{
    padding: 20,
  },
  font:{
    fontSize:15,
    color: 'black'
  },
});

export default CarItem;
