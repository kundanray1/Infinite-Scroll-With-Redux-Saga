
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

import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, PressableStyled, Screen, TextSmall } from '../Theme/Styled';

const Loader = ({navigation}) => {
    var buttontext="Get Started";
  return (
  

   
    <SkeletonPlaceholder>
   <Card style={{minWidth:"100%",height:300, }}>

 
   </Card>
   <Card style={{minWidth:"100%",height:300, marginTop:5}}>

 
</Card>
<Card style={{minWidth:"100%",height:300, marginTop:5}}>

 
</Card>
  </SkeletonPlaceholder> 
  );
};

export default Loader;
