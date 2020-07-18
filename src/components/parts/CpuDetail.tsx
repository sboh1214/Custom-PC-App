import React from 'react';
import {Text, View, TextStyle, StyleProp} from 'react-native';
import {CPU} from 'utils/parts';

type CpuDetailType = {
  cpu: CPU;
  textStyle: StyleProp<TextStyle>;
};

export default function CpuDetail({cpu, textStyle}: CpuDetailType) {
  return (
    <View>
      <Text style={textStyle}>{`Socket : ${cpu.socket}`}</Text>
      <Text style={textStyle}>{`${cpu.core} Core ${cpu.thread} Thread`}</Text>
      <Text style={textStyle}>{`${cpu.clock} GHz`}</Text>
    </View>
  );
}
