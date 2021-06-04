import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

// Package
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

// Screens
import DetailScreen from './pages/DetailScreen'

//redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Text, View } from 'react-native';
import Home from './components/Home/Home';

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="List"
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

export function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
    </View>
  );
}