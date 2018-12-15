import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

import CarList from '../../components/CarList/CarList';
import CarDetail from '../../components/CarDetail/CarDetail';

class Voitures extends Component {
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

      state = {
        cars : [
          {
            key : Math.random(),
            name : 'RENAULT 404',
            image : {
              uri : "https://st.lowrider.com/uploads/sites/7/2010/10/lrmp_1012_37_o-oldies_car_club_show-chevy_belair.jpg"
            },
            portes : 'portes: 4',
            sieges:  'sieges: 4',
            rented: false
          },
          {
            key : Math.random(),
            name : 'clio 206',
            image : {
              uri : "https://catalogue.automobile.tn/big/2013/03/30709.jpg"
            },
            portes : 'portes: 4',
            sieges:  'sieges: 4',
            rented: false
          },
          {
            key : Math.random(),
            name : 'clio 206',
            image : {
              uri : "https://media.peugeot.co.uk/image/25/7/208_allure_premium_exterior-coulour_twilight_blue.100257.19.jpg?autocrop=1"
            },
            portes : 'portes: 4',
            sieges:  'sieges: 4',
            rented: false
          },
          {
            key : Math.random(),
            name : 'Dacia Duster',
            image : {
              uri : "https://static.latribune.fr/full_width/1006769/dacia-duster.jpg"
            },
            portes : 'portes: 4',
            sieges:  'sieges: 4',
            rented: false
          },
          {
            key : Math.random(),
            name : 'clio 206',
            image : {
              uri : "https://www.cdn.daciagroup.com/content/dam/Dacia/ma/vehicles/logan/l52-logan/l52-logan-ph1/more-dacia/ambiance-logan.jpg.ximg.l_full_m.smart.jpg"
            },
            portes : 'portes: 4',
            sieges:  'sieges: 4',
            rented: false
          }
        ],
        selectedCar: null
      };


      CarSelectedHandler = key => {
        this.setState(prevState => {
          return{
            selectedCar: prevState.cars.find(car =>{
              return car.key === key
            })
          }
        })
      };

      ModalClosedHandler= () => {
        this.setState(prevState => {
          return{
            selectedCar : null
          }
        })
      };

      NotifCarHandler = () => {
        //const temp= this.state.rented;
        console.log(this.state.rented);
        this.setState(prevState => {
          return{
            rented : !rented
          }
        })
      };

      render() {
        return (
          <View style={styles.container}>
          <CarDetail selectedCar={this.state.selectedCar} onModalClosed={this.ModalClosedHandler.bind(this)}/>
          <CarList
            cars={this.state.cars}
            onItemPressed={this.CarSelectedHandler}
            notificOnCar={this.state.NotifCarHandler}
          />
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        backgroundColor:'white'
      },
    });
//}

export default Voitures;
