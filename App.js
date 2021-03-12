/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart, faShoppingBasket, faUser, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import Menu from './screens/Home'
import Order from './screens/Order'
import More from './screens/More'
import Profile from './screens/Profile'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Меню'}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Меню') {
                iconName = faShoppingCart
              } else if (route.name === 'Заказ') {
                iconName = faShoppingBasket;
              } else if (route.name === 'Профиль') {
                iconName = faUser;
              } else if (route.name === 'Еще') {
                iconName = faEllipsisH;
              }
              return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Меню" component={Menu} />
          <Tab.Screen name="Заказ" component={Order} />
          <Tab.Screen name="Профиль" component={Profile} />
          <Tab.Screen name="Еще" component={More} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
