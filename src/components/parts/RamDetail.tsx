import React from 'react';
import {Text, View, StyleProp, TextStyle} from 'react-native';
import {RAM} from 'utils/parts';

type RamDetailType = {
  ram: RAM;
  textStyle: StyleProp<TextStyle>;
};

export default function RamDetail({ram, textStyle}: RamDetailType) {
  return (
    <View>
      <Text style={textStyle}>{ram.gen}</Text>
      <Text style={textStyle}>{ram.capacity} GB</Text>
      <Text style={textStyle}>{ram.clock} MHz</Text>
    </View>
  );
}
