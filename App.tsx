import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Homepage from './src/screens/Homepage';
import ListCreate from './src/screens/ListCreate';
import ListElements from './src/screens/ListElements';

function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}
const Stack = createNativeStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={"Page d'accueil"}>
      <Stack.Screen
        name={"Page d'accueil"}
        component={Homepage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Creation de liste'}
        component={ListCreate}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Affichage liste'}
        component={ListElements}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default App;
