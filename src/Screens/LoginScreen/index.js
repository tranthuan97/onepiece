import React from 'react';
import { View, Text, Image, FlatList, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


//VARIABLES


//COMPONENTS


//STYLESHEET
import styleSheet from './styles';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
      <ImageBackground source={require('vuighe_net/src/images/background.jpeg')} style={{ flex: 1 }}>
        <View>
          <View style={{ flexDirection: 'row', paddingVertical: 20, opacity: 0.5 }}>
            <View style={{ flex: 2 }}></View>
            <Text style={{ flex: 6, textAlign: 'center', color: 'white', fontSize: 30, borderRadius: 15, borderWidth: 1, borderColor: 'white' }}>One Piece</Text>
            <View style={{ flex: 2 }}></View>
          </View>
          <View style={{ alignItems: 'center', paddingVertical: 15 }}><Image source={require('vuighe_net/src/images/Luffys-flag-icon.png')} style={{ width: 100, height: 100 }} /></View>
        </View>
        <View>
          <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <TextInput
              style={{ borderWidth: 2, borderColor: 'white', color: 'white', backgroundColor: 'black', borderRadius: 15, opacity: 0.3, paddingVertical: 10, paddingHorizontal: 20 }}
              underlineColorAndroid={'transparent'}
              placeholder={'Your Account'}
              placeholderTextColor={'white'}
            />
          </View>
          <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <TextInput
              style={{ borderWidth: 2, borderColor: 'white', color: 'white', backgroundColor: 'black', borderRadius: 15, opacity: 0.3, paddingVertical: 10, paddingHorizontal: 20 }}
              underlineColorAndroid={'transparent'}
              placeholder={'Your Password'}
              placeholderTextColor={'white'}
            />
          </View>
          <View style={{ alignItems: 'center', paddingVertical: 10 }}>
            <TouchableOpacity
              style={{ width: 100, paddingVertical: 10, backgroundColor: 'black', alignItems: 'center', opacity: 0.5, borderRadius: 10 }}>
              <Text style={{ fontSize: 20, color: 'white' }}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center', paddingVertical: 10, opacity: 0.8 }}><Text style={{ color: 'white' }}>Forgot password?</Text></View>
        <View style={{ flexDirection: 'row', backgroundColor: 'blue', paddingVertical: 5, justifyContent: 'center', marginHorizontal: 30, opacity: 0.7, marginVertical: 5 }}>
          <View><Icon name={'logo-facebook'} color={'white'} size={30} /></View>
          <View style={{marginLeft: 5, justifyContent: 'center'}}><Text style={{ color: 'white', fontSize: 17 }}>Sign in with Facebook</Text></View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: '#ED4C67', paddingVertical: 5, justifyContent: 'center', marginHorizontal: 30, opacity: 0.7, marginVertical: 5 }}>
          <View><Icon name={'logo-google'} color={'white'} size={30} /></View>
          <View style={{marginLeft: 5, justifyContent: 'center'}}><Text style={{ color: 'white', fontSize: 17 }}>Sign in with Facebook</Text></View>
        </View>
        <View style={{ alignItems: 'center', paddingVertical: 10, opacity: 0.8 }}><Text style={{ color: 'white' }}>Don't have an Account? Sign Up</Text></View>
      </ImageBackground>
    );
  }
}