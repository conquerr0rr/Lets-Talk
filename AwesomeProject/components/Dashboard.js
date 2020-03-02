import React, {Component, useState, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  FlatList,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Dashboard = ({navigation}) => {
  // BACKEND CONNECTION

  // this line is for setting the states and declaring the variables
  // Here will load is a state and setwillLoad is a function for that

  const [LoadIt, setLoadIt] = useState([]);

  useEffect(() => {
    async function fetchData() {
      fetch('http://192.168.42.241:3000/read', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          setLoadIt(() => {
            return responseJson;
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   async () => {
  //     try {
  //       let response = await fetch('http://192.168.42.175:3000/read', {
  //         method: 'GET',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       let responseJson = await response.json();
  //       console.log(responseJson);
  //       // setLoadIt(() => {
  //       //   return responseJson;
  //       // });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  // });
  // }
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       setLoadIt(() => {
  //         return responseJson;
  //       });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  // BACKEND OVER
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/images/089PremiumWhite.png')}
        style={styles.bgImg}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="dark-content"
        />

        <View style={styles.MainContainer}>
          <View style={styles.NavContainer}>
            <View style={styles.NavNavigation}>
              <TouchableOpacity
                style={styles.Hamburger}
                onPress={() => navigation.openDrawer()}>
                <Image
                  style={styles.ImgHamburger}
                  source={require('../assets/icons/menu.png')}
                />
              </TouchableOpacity>
              <Text style={styles.NavHeading}>Dashboard</Text>
            </View>
            <View style={styles.SearchBar}>
              <TouchableOpacity style={styles.SearchIcon}>
                <Image
                  style={styles.ImgSearch}
                  source={require('../assets/icons/search.png')}
                />
              </TouchableOpacity>
              <View style={styles.Textbox}>
                <TextInput
                  style={styles.SearchText}
                  placeholder={'Search by name,place,location'}
                />
              </View>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {/* <View style={styles.CardContainer}> */}
            <FlatList
              data={LoadIt}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.Card}>
                  <View style={styles.LeftData}>
                    <Text style={styles.CardHeading}>{item.heading}</Text>
                    <Text style={styles.CardDate}>{item.date}</Text>
                    <Text style={styles.CardTime}>{item.time}</Text>
                  </View>
                  <View style={styles.RightData}>
                    <Text style={styles.CardDescription}>{item.content}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={({id}, index) => id}
            />

            <TouchableOpacity style={styles.Card}>
              <View style={styles.LeftData}>
                <Text style={styles.CardHeading}>Meeting Tomorrow</Text>
                <Text style={styles.CardDate}>25 Mar 2020</Text>
                <Text style={styles.CardTime}>11:50 AM</Text>
              </View>
              <View style={styles.RightData}>
                <Text style={styles.CardDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi maxime reprehenderit quae facilis! Dicta aperiam quod
                  laudantium error numquam quo,
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Card}>
              <View style={styles.LeftData}>
                <Text style={styles.CardHeading}>Meeting Tomorrow</Text>
                <Text style={styles.CardDate}>25 Mar 2020</Text>
                <Text style={styles.CardTime}>11:50 AM</Text>
              </View>
              <View style={styles.RightData}>
                <Text style={styles.CardDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi maxime reprehenderit quae facilis! Dicta aperiam quod
                  laudantium error numquam quo,
                </Text>
              </View>
            </TouchableOpacity>
            {/* </View> */}
          </ScrollView>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.AddButton}
              onPress={() => navigation.navigate('AddNotes')}>
              <Text style={styles.buttonHeading}>Create New Note</Text>
              <Image
                style={styles.buttonImg}
                source={require('../assets/icons/iconmasdsadsaonstr-plus-2-240.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    height: hp('100%'),
  },
  contentContainer: {
    zIndex: 0,
    paddingVertical: 20,
    alignSelf: 'center',
    // height: hp('100%'),
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
  NavContainer: {
    height: hp('20%'),
    // backgroundColor: '#1473E6',
    // backgroundColor: 'red',
  },
  SearchBar: {
    // flex: 1,
    height: hp('6%'),
    width: wp('85%'),
    backgroundColor: Colors.white,
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: 'black',
    marginTop: hp('3%'),
    borderRadius: 10,
    elevation: 2,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SearchText: {
    fontFamily: 'Muli-Light',
    // marginTop: '3%',
    fontSize: 11,
    color: 'grey',
  },

  SearchIcon: {
    top: hp('1.5%'),
    // width: wp('10%'),
  },
  Textbox: {
    width: wp('45%'),
  },
  NavNavigation: {
    display: 'flex',
    marginTop: StatusBar.currentHeight + hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Hamburger: {
    top: hp('1%'),
    // backgroundColor: 'blue',
    width: wp('10%'),
  },
  NavHeading: {
    fontFamily: 'Montserrat-Bold',
    // alignSelf: 'center',
    fontSize: 23,
    width: wp('60%'),
    color: 'black',
    // backgroundColor: 'red',
    // marginTop: hp('6%'),
  },
  CardContainer: {
    alignSelf: 'center',
  },
  Card: {
    height: hp('15%'),
    width: wp('80%'),
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '4%',
    borderRadius: 10,
    backgroundColor: 'white',
    // elevation: 0.5,
  },
  LeftData: {
    marginVertical: '3%',
    // marginTop: '4%',
    width: wp('25%'),
  },
  RightData: {
    marginTop: '3%',
    width: wp('40%'),
  },
  CardHeading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: 'black',
  },
  CardDate: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    marginTop: '5%',
    color: 'grey',
  },
  CardTime: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 8,
    marginTop: '5%',
    color: 'silver',
  },
  CardDescription: {
    alignSelf: 'center',
    fontFamily: 'Muli-Light',
    fontSize: 10,
    color: 'grey',
  },
  btnContainer: {
    height: hp('10%'),
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  AddButton: {
    height: hp('8%'),
    width: wp('60%'),
    zIndex: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    elevation: 2,
    padding: 6,
    justifyContent: 'space-around',
    borderRadius: 200,
    alignSelf: 'center',
  },
  buttonHeading: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    textAlignVertical: 'center',
    // marginTop: '5%',
  },
  buttonImg: {
    height: hp('4%'),
    width: wp('8%'),
    top: hp('1%'),
  },
  ImgHamburger: {
    height: hp('4%'),
    width: wp('8%'),
    // top: hp('2%'),
  },
  ImgSearch: {
    // top: hp('0.3%'),
    //  backgroundColor: 'red',
    height: hp('3%'),
    width: wp('5.3%'),
  },
});

export default Dashboard;
