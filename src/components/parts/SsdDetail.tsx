import React from 'react';
import {Text, View} from 'react-native';
import {SSD} from 'utils/parts';

type SsdDetailType = {
  ssd: SSD;
};

export default function SsdDetail({ssd}: SsdDetailType) {
  return (
    <View>
      <Text>{ssd.nvme ? 'NVME' : 'SATA'}</Text>
      <Text>{ssd.capacity}GB</Text>
      <Text>{ssd.memtype}</Text>
    </View>
  );
}
