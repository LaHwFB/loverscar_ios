import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import MapView from 'react-native-maps';

class Localisation extends Component {
  constructor(props) {
  super(props);
  this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
}

state ={
    focusedLocation : {
      latitude: 35.737363,
      longitude: -5,
      latitudeDelta: 0.7211,
      longitudeDelta: Dimensions.get('window').width/Dimensions.get('window').height * 0.0211
    },
    mylocation: {
      nativeEvent: {
          coordinate:{
          latitude: 0,
          longitude: 0
        }
      }
    },
    agencelocation: {
      nativeEvent: {
          coordinate:{
          latitude: 35.366,
          longitude: -5.44
        }
      }
    }
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

PicklocationHandler = e => {
  const coords = e.nativeEvent.coordinate;

  this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
  });

  this.setState(prevState => {
    return {
      focusedLocation: {
        ...prevState.focusedLocation,
        latitude: coords.latitude,
        longitude: coords.longitude
      }
    }
  })
};

getLocationHandler = () => {
  navigator.geolocation.getCurrentPosition(pos =>{
    this.setState(prevState => {
      return {
        mylocation: {
          nativeEvent: {
              coordinate:{
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            }
          }
        }
      }
    });
    console.log(this.state.mylocation);
    this.PicklocationHandler(this.state.mylocation);
  },
  err =>{
    console.log(err);
    alert(" Fetshing location failed choose onr manually !!")
  })
}

    render() {
        return (
           <View>
              <MapView
              initialRegion={this.state.focusedLocation}
              onPress={this.PicklocationHandler}
              style={styles.map}
              zoomEnabled={true}
              ref={ref => this.map = ref}
              >
                <MapView.Marker coordinate={this.state.mylocation.nativeEvent.coordinate}/>
                <MapView.Marker coordinate={this.state.agencelocation.nativeEvent.coordinate}/>
              </MapView>

              <Button title='Locate me' onPress={this.getLocationHandler} ></Button>
           </View>
        );
    }
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '85%',
    marginBottom: 30
  }
});

export default Localisation;
