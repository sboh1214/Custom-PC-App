import React from 'react';
import {Text, View, StyleProp, TextStyle} from 'react-native';
import {VGA} from 'utils/parts';

type VgaDetailType = {
  vga: VGA;
  textStyle: StyleProp<TextStyle>;
};

export default function VgaDetail({vga, textStyle}: VgaDetailType) {
  return (
    <View>
      <Text style={textStyle}>{vga.chipmaker}</Text>
      <Text style={textStyle}>{vga.chipset}</Text>
      <Text style={textStyle}>{vga.memcap}GB</Text>
      <Text style={textStyle}>{vga.length}mm</Text>
    </View>
  );
}
