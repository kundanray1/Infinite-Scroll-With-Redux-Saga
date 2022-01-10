
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';

import logo from "../Assets/logo.png";
import LinearGradient from 'react-native-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, PressableStyled, Screen, TextSmall } from '../Theme/Styled';

const SplashScreen = ({navigation}) => {

    var buttontext="Get Started";
  return (
    <LinearGradient colors={['#005679', '#005679',]} style={styles.linearGradient}>

    
        <Image source={logo} style={{width:220,height:150}}/>
   
      
      {/* onPress={() => navigation.navigate('SideDrawer')} */}
    
<View style={{height:'50%',justifyContent:'flex-end',width:'100%',alignItems:'center'}}>
  <PressableStyled onPress={()=>{navigation.navigate('LandingScreen')}}>
    <TextSmall>{buttontext}</TextSmall>
    
  </PressableStyled>
  </View>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
   
    flexDirection: 'column',
  

 
  },
  linearGradient: {
   width:'100%',
   justifyContent:'space-around',
   alignItems:'center',
    flex:1,
    borderRadius: 5
  },

  header: {
    justifyContent: 'center',
    fontSize: 30,
    color: '#4066FF',
    fontWeight: 'bold',
  },
 
  buttonContainer: {
    alignItems: 'center',
  },
  textContainer: {
    height: Dimensions.get('window').height - 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor:'red',
  },
});
