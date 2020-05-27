import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchScreen from 'screens/SearchScreen';
import QuickEstimateScreen from 'screens/QuickEstimateScreen';
import BuildEstimateScreen from 'screens/BuildEstimateScreen';
import LibraryScreen from 'screens/LibraryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="검색" component={SearchScreen} />
        <Tab.Screen name="빠른 견적" component={QuickEstimateScreen} />
        <Tab.Screen name="견적 제작" component={BuildEstimateScreen} />
        <Tab.Screen name="보관함" component={LibraryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
