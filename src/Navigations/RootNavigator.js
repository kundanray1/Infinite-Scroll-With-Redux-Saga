

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import MainScreen from '../Screens/MainScreen';

// import {StatusBar} from 'react-native';
const Stack = createStackNavigator();

  
  const RootNavigator = () => {
    

  
    return (
    
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {/* SplashScreen which will come once for 5 Seconds */}

          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{headerShown: false}}
          />
         
          <Stack.Screen
            name="LandingScreen"
            component={MainScreen}
            options={{headerShown: false}}
          />
    
        </Stack.Navigator>
      </NavigationContainer>
     
    );
  };
  export default RootNavigator;
  