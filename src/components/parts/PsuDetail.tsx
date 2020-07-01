import React from 'react';
import {Text, View} from 'react-native';
import {PSU} from 'utils/parts';

type PsuDetailType = {
  psu: PSU;
};

export default function PsuDetail({psu}: PsuDetailType) {
  return (
    <View>
      <Text>{psu.capacity}W</Text>
      <Text>{psu.cert}</Text>
    </View>
  );
}
