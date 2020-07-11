import React from 'react';
import {Text, View} from 'react-native';
import {HDD} from 'utils/parts';

type HddDetailType = {
  hdd: HDD;
};

export default function HddDetail({hdd}: HddDetailType) {
  return (
    <View>
      <Text>{hdd.capacity}TB</Text>
      <Text>{hdd.rotspeed}RPM</Text>
    </View>
  );
}
