import React from 'react';
import {Text, View} from 'react-native';
import {VGA} from 'utils/parts';

type VgaDetailType = {
  vga: VGA;
};

export default function VgaDetail({vga}: VgaDetailType) {
  return (
    <View>
      <Text>{vga.chipmaker}</Text>
      <Text>{vga.chipset}</Text>
      <Text>{vga.memcap}GB</Text>
      <Text>{vga.length}mm</Text>
    </View>
  );
}
