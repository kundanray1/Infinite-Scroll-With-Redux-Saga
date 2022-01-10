/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import axios from 'axios';
//  import reducers from './src/Redux/Reducers/reducers';
 import { Provider } from 'react-redux';
 import { createStore, applyMiddleware, combineReducers } from 'redux';
 import createSagaMiddleware from 'redux-saga';
 
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import { Container, Screen } from './src/Theme/Styled';
import RootNavigator from './src/Navigations/RootNavigator';
import SplashScreen from './src/Screens/SplashScreen';
import FirstReducer from './src/Redux/Reducers/reducers';
import saga from './src/Redux/Sagas/sagas';
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({FirstReducer});
const store= createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);




const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <Provider store={store}>
          <RootNavigator/>
          </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
