import React from 'react';
import {Text, View} from 'react-native';
import {CPU} from 'utils/parts';

type CpuDetailType = {
  cpu: CPU;
};

export default function CpuDetail({cpu}: CpuDetailType) {
  return (
    <View>
      <Text>{`Socket : ${cpu.socket}`}</Text>
      <Text>{`${cpu.core} Core ${cpu.thread} Thread`}</Text>
      <Text>{`${cpu.clock} GHz`}</Text>
    </View>
  );
}
