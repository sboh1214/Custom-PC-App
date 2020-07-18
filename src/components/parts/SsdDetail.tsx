import React from 'react';
import {Text, View, StyleProp, TextStyle} from 'react-native';
import {SSD} from 'utils/parts';

type SsdDetailType = {
  ssd: SSD;
  textStyle: StyleProp<TextStyle>;
};

export default function SsdDetail({ssd, textStyle}: SsdDetailType) {
  return (
    <View>
      <Text style={textStyle}>{ssd.nvme ? 'NVME' : 'SATA'}</Text>
      <Text style={textStyle}>{ssd.capacity}GB</Text>
      <Text style={textStyle}>{ssd.memtype}</Text>
    </View>
  );
}
