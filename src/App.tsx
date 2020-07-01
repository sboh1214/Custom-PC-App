import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchScreen from 'screens/SearchScreen';
import QuickEstimateScreen from 'screens/QuickEstimateScreen';
import BuildEstimateScreen from 'screens/BuildEstimateScreen';
import LibraryScreen from 'screens/LibraryScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';

type TabBarIcon = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}: TabBarIcon) => {
            let iconName;
            if (route.name === '검색') {
              iconName = 'search';
            } else if (route.name === '빠른 견적') {
              iconName = 'lightbulb-outline';
            } else if (route.name === '견적 제작') {
              iconName = 'format-list-bulleted';
            } else {
              iconName = 'library-books';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="검색" component={SearchScreen} />
        <Tab.Screen name="빠른 견적" component={QuickEstimateScreen} />
        <Tab.Screen name="견적 제작" component={BuildEstimateScreen} />
        <Tab.Screen name="보관함" component={LibraryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
