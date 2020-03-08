import React, {Component, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import Dashboard from './Dashboard';
const AddNotes = ({navigation}) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');

  function addDATA() {
    fetch('http://192.168.42.109:3000/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        heading: heading,
        content: content,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View style={styles.MainContainer}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      {/* <View style={styles.HeaderContainer}>
        <Text style={styles.PageHeading}>Add Data</Text>
      </View> */}
      <View style={styles.NavNavigation}>
        <TouchableOpacity
          style={styles.Hamburger}
          onPress={() => navigation.navigate('Dashboard')}>
          <Image
            style={styles.ImgHamburger}
            source={require('../assets/icons/asd.png')}
          />
        </TouchableOpacity>
        <Text style={styles.NavHeading}>Add Data</Text>
      </View>

      <View style={styles.ContentContainer}>
        <Text style={styles.ContentHeading}>Heading</Text>
        <TextInput
          style={styles.HeadingInput}
          onChangeText={text => setHeading(text)}
          value={heading}
        />

        <Text style={styles.ContentData}>Content</Text>
        <TextInput
          style={styles.DataInput}
          onChangeText={text => setContent(text)}
          value={content}
          multiline={true}
        />
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.DiscardButton}
          onPress={() => {
            navigation.navigate('Dashboard');
          }}>
          <Text style={styles.buttonHeading}>Cancel</Text>
          <Image
            style={styles.buttonImg}
            source={require('../assets/icons/error.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SaveButton}
          onPress={
            () => {
              addDATA();
              navigation.navigate('Dashboard');
            }
            // CreateData();
          }>
          <Text style={styles.buttonHeading}>Save</Text>
          <Image
            style={styles.buttonImg}
            source={require('../assets/icons/checked.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    height: hp('100%'),
  },
  NavNavigation: {
    display: 'flex',
    marginTop: StatusBar.currentHeight + hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: hp('4%'),
  },
  Hamburger: {
    top: hp('1%'),
    // backgroundColor: 'blue',
    width: wp('10%'),
  },
  NavHeading: {
    fontFamily: 'Montserrat-Bold',
    // alignSelf: 'center',
    fontSize: hp('3.8%'),
    width: wp('56%'),
    color: 'black',
    // backgroundColor: 'red',
    // marginTop: hp('6%'),
  },
  ImgHamburger: {
    height: hp('4%'),
    width: wp('8%'),
    // top: hp('2%'),
  },
  HeaderContainer: {
    height: hp('10%'),
    marginTop: StatusBar.currentHeight + hp('2%'),
    // backgroundColor: 'blue',
  },
  ContentContainer: {
    height: hp('70%'),
    alignSelf: 'center',
    // backgroundColor: 'red'
  },
  ContentHeading: {
    alignSelf: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: hp('2.5%'),
  },
  HeadingInput: {
    height: hp('10%'),
    width: wp('80%'),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'silver',
    textAlign: 'center',
    alignSelf: 'center',
  },
  ContentData: {
    alignSelf: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: hp('2.5%'),
    marginTop: hp('3%'),
  },
  DataInput: {
    height: hp('50%'),
    width: wp('80%'),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'silver',
    textAlign: 'center',
    alignSelf: 'center',
  },
  ButtonContainer: {
    marginTop: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  SaveButton: {
    height: hp('8%'),
    width: wp('30%'),
    zIndex: 10,
    marginBottom: hp('3%'),
    backgroundColor: '#2ed573',
    display: 'flex',
    flexDirection: 'row',
    elevation: 2,
    padding: 6,
    justifyContent: 'space-around',
    borderRadius: 20,
    alignSelf: 'center',
  },
  DiscardButton: {
    height: hp('8%'),
    width: wp('30%'),
    zIndex: 10,
    marginBottom: hp('3%'),
    backgroundColor: '#e74c3c',
    display: 'flex',
    flexDirection: 'row',
    elevation: 2,
    padding: 6,
    justifyContent: 'space-around',
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonHeading: {
    fontFamily: 'Montserrat-Bold',
    fontSize: hp('2.2%'),
    textAlignVertical: 'center',
    // marginTop: '5%',
  },
  buttonImg: {
    height: hp('4%'),
    width: wp('7%'),
    marginVertical: '6%',
  },
});

export default AddNotes;
