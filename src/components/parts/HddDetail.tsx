import React from 'react';
import {Text, View, TextStyle, StyleProp} from 'react-native';
import {HDD} from 'utils/parts';

type HddDetailType = {
  hdd: HDD;
  textStyle: StyleProp<TextStyle>;
};

export default function HddDetail({hdd, textStyle}: HddDetailType) {
  return (
    <View>
      <Text style={textStyle}>{hdd.capacity}TB</Text>
      <Text style={textStyle}>{hdd.rotspeed}RPM</Text>
    </View>
  );
}
