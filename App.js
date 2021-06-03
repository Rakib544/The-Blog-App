import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

// Package
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

// Screens
import MainScreen from './pages/MainScreen'
import DetailScreen from './pages/DetailScreen'

//redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

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
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={() => ({
              headerBackTitleVisible: false,
              cardStyleInterpolator: ({ current: { progress } }) => {
                return {
                  cardStyle: {
                    opacity: progress,
                  },
                };
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;