import React from 'react';
import {Text, View, StyleProp, TextStyle} from 'react-native';
import {PSU} from 'utils/parts';

type PsuDetailType = {
  psu: PSU;
  textStyle: StyleProp<TextStyle>;
};

export default function PsuDetail({psu, textStyle}: PsuDetailType) {
  return (
    <View>
      <Text style={textStyle}>{psu.capacity}W</Text>
      <Text style={textStyle}>{psu.cert}</Text>
    </View>
  );
}
