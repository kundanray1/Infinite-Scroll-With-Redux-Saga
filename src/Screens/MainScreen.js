
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,FlatList, SafeAreaView, 
} from 'react-native';
import logo from "../Assets/logo.png";
import LinearGradient from 'react-native-linear-gradient';
import {  useDispatch, useSelector } from 'react-redux';

import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, PressableStyled, Screen, TextSmall } from '../Theme/Styled';
import Loader from '../Component/Loader';
import { getUsersFetch } from '../Redux/Actions/actions';
import LoaderEnd from '../Component/LoaderEnd';


const MainScreen = ({navigation}) => {
const [initialLoad,setInitialLoad]= useState(true);
 const dispatch = useDispatch();
 const users = useSelector(state => state.FirstReducer.users);
const loading = useSelector(state =>state.FirstReducer.loading)
//  console.log(users)
 
 useEffect(() => {
  getUsersRequest()
 }, [])

const getUsersRequest=()=>{
  if(loading){
    return null
  }
  else{
  dispatch(getUsersFetch());
  }
console.log(users)
}
  
  return (
    <SafeAreaView>
    
<View styles={{flex:1}}>
      <FlatList
        data={users}
        styles={{flex:0.8}}
        numColumns={1}
       onEndReachedThreshold={50}
        onEndReached={getUsersRequest}
        // keyExtractor={e => e}
        renderItem={({item}) =>!loading?(<View style={{flexDirection:'column'}}>
         {item.map((photos,i)=> {return(!loading?<Image source={{uri:photos.thumbnailUrl}} style={styles.item}/>:<Loader/> )})}
       
         
     

           </View>):(<Loader/>)

        }
      />
  {/* <Loader/> */}
  </View>
  {initialLoad&&<View style={{position:'relative',bottom:0, }}>
    <Loader/>
  </View>}
    </SafeAreaView>
  );
}

export default MainScreen

  const styles = StyleSheet.create({
  
    item: {
    height:300,
      width: '100%',
     
      resizeMode:'cover',
     
    },
  });
  