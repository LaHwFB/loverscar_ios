import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';

const startMainTabs = () => {
  Promise.all([
  Icon.getImageSource('ios-home',30,'yellow'),
  Icon.getImageSource('ios-car',30,'yellow'),
  Icon.getImageSource('ios-compass',30,'yellow'),
  Icon.getImageSource('md-menu',30,'black')
]).then(sources => {
  Navigation.startTabBasedApp({
    tabs : [
      {
        label: 'Home',
        screen:'loverscar.HomeScreen',
        title: 'Home',
        icon: sources[0],
        navigatorButtons: {
          leftButtons: [
            {
            icon: sources[3],
            title: 'menu',
            id: 'sideDrawerToggle'
            }
          ]
        }
      },
      {
        label: 'Voitures',
        screen:'loverscar.Voitures',
        title:'Voitures',
        icon: sources[1],
        navigatorButtons: {
          leftButtons: [
            {
              icon: sources[3],
              title: "Menu",
              id: "sideDrawerToggle"
            }
          ]
        }
      },
      {
        label: 'Locate',
        screen:'loverscar.Localisation',
        title:'Locate',
        icon: sources[2],
        navigatorButtons: {
          leftButtons: [
            {
            icon: sources[3],
            title: 'menu',
            id: 'sideDrawerToggle'
            }
          ]
        }
      }
    ],
    appStyle: {
      tabBarSelectedButtonColor: '#e8c427',//'#eab435',
      tabBarBackgroundColor: '#a8a59f',
      tabBarButtonColor: '#4c4a47',
      initialTabIndex: 1
    },
    drawer: {
    left: {
      screen: 'loverscar.SideDrawer',
      passProps: {},
      fixedWidth: 1000,
    }},
    animationType: 'fade'
  });
});
};

export default startMainTabs;
