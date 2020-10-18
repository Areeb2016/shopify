import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { UploadScreen } from './components/screens/upload';
import { HomeScreen } from './components/screens/home';
import { LoginScreen } from './components/screens/login';
import ReduxScreen from './components/screens/redux';

const Stack = createStackNavigator();

function App(){

  return (
    <NavigationContainer>

      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Redux' component={ReduxScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;