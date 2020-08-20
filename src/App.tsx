import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import React, {useContext} from 'react';
import SearchScreen from 'screens/tabs/SearchScreen';
import QuickQuoteScreen from 'screens/tabs/QuickQuoteScreen';
import BuildQuoteScreen from 'screens/tabs/BuildQuoteScreen';
import LibraryScreen from 'screens/tabs/LibraryScreen';
import DetailQuoteScreen from 'screens/DetailQuoteScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {SCREEN} from 'utils/navigation';
import {ThemeContextProvider, ThemeContext} from 'utils/theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type TabBarIcon = {
  focused: boolean;
  color: string;
  size: number;
};

function SearchTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN.Search} component={SearchScreen} />
    </Stack.Navigator>
  );
}

function QuickQuoteTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN.QuickQuote} component={QuickQuoteScreen} />
      <Stack.Screen name={SCREEN.DetailQuote} component={DetailQuoteScreen} />
    </Stack.Navigator>
  );
}

function BuildQuoteTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN.QuickQuote} component={BuildQuoteScreen} />
      <Stack.Screen name={SCREEN.DetailQuote} component={DetailQuoteScreen} />
    </Stack.Navigator>
  );
}

function LibraryTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN.Library} component={LibraryScreen} />
      <Stack.Screen name={SCREEN.DetailQuote} component={DetailQuoteScreen} />
    </Stack.Navigator>
  );
}

function TabScreen() {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
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
        <Tab.Screen name={SCREEN.Search} component={SearchTab} />
        <Tab.Screen name={SCREEN.QuickQuote} component={QuickQuoteTab} />
        <Tab.Screen name={SCREEN.BuildEstimate} component={BuildQuoteTab} />
        <Tab.Screen name={SCREEN.Library} component={LibraryTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function CustomPCApp() {
  return (
    <ThemeContextProvider>
      <TabScreen />
    </ThemeContextProvider>
  );
}
