import React from 'react';
import {Text, View, TextStyle, StyleProp} from 'react-native';
import {MB} from 'utils/parts';

type MbDetailType = {
  mb: MB;
  textStyle: StyleProp<TextStyle>;
};

export default function MbDetail({mb, textStyle}: MbDetailType) {
  return (
    <View>
      <Text style={textStyle}>{mb.socket}</Text>
      <Text style={textStyle}>{mb.chipset}</Text>
      <Text style={textStyle}>{mb.form}</Text>
    </View>
  );
}
