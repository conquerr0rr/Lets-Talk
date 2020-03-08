/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import {
//   createAppContainer,
//   createDrawerNavigator,
//   createSwitchNavigator,
// } from 'react-navigation-drawer';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Welcome from '../AwesomeProject/components/Welcome';
import AddNotes from '../AwesomeProject/components/AddNotes';
import Dashboard from '../AwesomeProject/components/Dashboard';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App: () => React$Node = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Welcome" component={Welcome} />
    //     <Stack.Screen name="DASHBOARD" component={Dashboard} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Welcome"
        backBehavior={'history'}
        drawerType={'back'}
        drawerContentOptions={{
          // activeTintColor: 'white',
          // inactiveTintColor: '#0097e6',
          backgroundColor: 'rgba(255,255,255,0.1)',
          activeBackgroundColor: 'lightblue',
          labelStyle: {
            fontFamily: 'Montserrat-Regular',
            // fontSize: 15,
            // fontWeight: '100',
            textAlign: 'center',
          }, 
        }}
        drawerStyle={{
          headerStyle: {
            fontSize: 40,
            fontFamily: 'Montserrat-Bold',
          },
        }}>
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="AddNotes" component={AddNotes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   drawerDisplay: {
//     backgroundColor: 'orange',
//     fontFamily: 'Montserrat-Bold',
//     fontSize: 40,
//     color: 'white',
//   },
// });

export default App;
