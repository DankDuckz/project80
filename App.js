import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'
import DailyPic from './screens/DailyPic'
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import * as React from 'react'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>
        <Stack.Screen name = "DailyPic" component = {DailyPic}/>
        <Stack.Screen name = "SpaceCrafts" component = {SpaceCrafts}/>
        <Stack.Screen name = "StarMap" component = {StarMap}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
