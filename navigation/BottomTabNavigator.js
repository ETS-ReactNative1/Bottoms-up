import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import PantryScreen from '../screens/PantryScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-home' />
          ),
        }}
      />

      <BottomTab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='md-search' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Pantry'
        component={PantryScreen}
        options={{
          title: 'Pantry',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name='fridge' size={24} color='black' />
          ),
        }}
      />
      <BottomTab.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          title: 'Favorite',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name='favorite' size={24} color='black' />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Bottoms-Up';
    case 'Search':
      return 'Search';
    case 'Pantry':
      return 'Pantry';
    case 'Favorite':
      return 'Favorite';
  }
}
