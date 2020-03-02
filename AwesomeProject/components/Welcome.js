import React, {Component, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {TouchableOpacity} from 'react-native-gesture-handler';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// export default class Welcome extends Component {
const Welcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Dashboard');
    }, 2000);
  });

  return (
    <ImageBackground
      source={require('../assets/images/055SharpBlues.png')}
      style={styles.bgImg}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <View style={styles.MainContainer}>
        <Text style={styles.WelcomeText}>Lets Talk</Text>
        <View>
          <Text style={styles.IntroText}>Powered by</Text>
          <Text style={styles.IntroCompany}>
            Hounding Infosec Private Limited
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    height: hp('100%'),
    // ImageBackground:
    // backgroundColor:'red',
  },
  mainHead: {
    letterSpacing: -1,
    textAlign: 'center',
    fontSize: 33,
    fontFamily: 'Montserrat-Bold',
    color: 'rgb(65, 64, 58)',
  },
  IntroText: {
    alignSelf: 'center',
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    fontSize: 10,
    // textShadowOffset: {
    //   width: 2,
    //   height: 7,
    // },
    // textShadowRadius: 5,
    // textShadowColor: 'rgba(0,0,0,0.21)',
  },
  IntroCompany: {
    alignSelf: 'center',
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    marginTop: hp('1%'),
    fontSize: 17,
    letterSpacing: -1,
    width: wp('70%'),
    textAlign: 'center',
    // textShadowOffset: {
    //   width: 2,
    //   height: 7,
    // },
    // textShadowRadius: 5,
    // textShadowColor: 'rgba(0,0,0,0.21)',
  },
  mainButton: {
    width: wp('60%'),
    height: hp('8%'),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 200,
    // elevation: 15,
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
  WelcomeText: {
    width: wp('80%'),
    // height: hp('30%'),
    alignSelf: 'center',
    fontFamily: 'Montserrat-Black',
    // fontWeight: '100',
    color: 'white',
    marginTop: hp('22%'),
    marginBottom: hp('25%'),
    textShadowOffset: {
      // width: 2,
      height: 7,
    },
    // textShadowRadius: 22,
    // textShadowColor: 'rgba(0,0,0,0.11)',
    // backgroundColor:'red',
    letterSpacing: -3,
    textAlign: 'center',
    fontSize: 90,
  },
});

export default Welcome;
