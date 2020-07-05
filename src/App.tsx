import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import React, {useState, useEffect} from 'react';
import SearchScreen from 'screens/SearchScreen';
import QuickEstimateScreen from 'screens/QuickEstimateScreen';
import BuildEstimateScreen from 'screens/BuildEstimateScreen';
import LibraryScreen from 'screens/LibraryScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import DetailPartScreen from 'screens/DetailPartScreen';
import {Appearance} from 'react-native';

const Stack = createStackNavigator();

type TabBarIcon = {
  focused: boolean;
  color: string;
  size: number;
};

function TabScreen() {
  return (
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
  );
}

const Tab = createBottomTabNavigator();

export default function CustomPCApp() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  useEffect(() => {
    setIsDarkTheme(Appearance.getColorScheme() === 'dark');
    Appearance.addChangeListener((theme) => {
      setIsDarkTheme(theme.colorScheme === 'dark');
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="컴퓨터 견적" component={TabScreen} />
        <Stack.Screen name="부품 세부 페이지" component={DetailPartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
