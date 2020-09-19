import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage.js';
import PeopleDetailPage from './src/pages/PeopleDetailPage.js';

import {capitalizeFirstLetter} from './src/util';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
    'PeopleDetail': {
      screen: PeopleDetailPage,
      navigationOptions: ({navigation})=> {
        const peopleName = capitalizeFirstLetter
        (navigation.state.params.people.name.first);
          return({
            title: peopleName,
            headerTitleStyle: {
              fontSize: 30,
              color: 'white'
            }
          });
        }
      }
}, {
  defaultNavigationOptions: {
      title : 'Várias pessoas!',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
        borderBottomWidth: 2,
        borderBottomColor: '#cccc'
      },
      headerTitleStyle: {
        fontSize: 30,
        color: 'white',
        flexGrow: 1,
        textAlign: 'center'
      }
  }
});


const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;