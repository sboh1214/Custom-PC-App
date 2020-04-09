import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Container, Header, Content, Text} from 'native-base';

import SearchScreen from './screens/SearchScreen';

function SettingsScreen() {
  return (
    <Container>
      <Header />
      <Content>
        <Text>Hello</Text>
      </Content>
    </Container>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="검색" component={SearchScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
