import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import React, {useContext} from 'react';
import SearchScreen from 'screens/tabs/SearchScreen';
import QuickEstimateScreen from 'screens/tabs/QuickEstimateScreen';
import BuildEstimateScreen from 'screens/tabs/BuildEstimateScreen';
import LibraryScreen from 'screens/tabs/LibraryScreen';
import DetailQuoteScreen from 'screens/DetailQuoteScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {SCREEN} from 'utils/navigation';
import {ThemeContextProvider, ThemeContext} from 'utils/theme';

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
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name={SCREEN.Search} component={SearchScreen} />
      <Tab.Screen name={SCREEN.QuickEstimate} component={QuickEstimateScreen} />
      <Tab.Screen name={SCREEN.BuildEstimate} component={BuildEstimateScreen} />
      <Tab.Screen name={SCREEN.Library} component={LibraryScreen} />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Navigator() {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="컴퓨터 견적" component={TabScreen} />
        <Stack.Screen name={SCREEN.DetailQuote} component={DetailQuoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function CustomPCApp() {
  return (
    <ThemeContextProvider>
      <Navigator />
    </ThemeContextProvider>
  );
}
