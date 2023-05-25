import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Homepage from './src/components/Homepage';
import CreateList from './src/components/CreateaList';

const Tab = createBottomTabNavigator();
const ListsStack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='My Lists' screenOptions={({ route }) => ({
        tabBarShowLabel: false,
      })}>
        <Tab.Screen name="My Lists" component={Homepage}/>
        <Tab.Screen name="New List" component={CreateList}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
  }
export default App;

