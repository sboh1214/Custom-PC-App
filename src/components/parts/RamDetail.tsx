import React from 'react';
import {Text, View} from 'react-native';
import {RAM} from 'utils/parts';

type RamDetailType = {
  ram: RAM;
};

export default function RamDetail({ram}: RamDetailType) {
  return (
    <View>
      <Text>{ram.gen}</Text>
      <Text>{ram.capacity}</Text>
      <Text>{ram.clock}MHz</Text>
    </View>
  );
}
