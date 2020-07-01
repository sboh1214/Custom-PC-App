import React from 'react';
import {Text, View} from 'react-native';
import {MB} from 'utils/parts';

type MbDetailType = {
  mb: MB;
};

export default function MbDetail({mb}: MbDetailType) {
  return (
    <View>
      <Text>{mb.socket}</Text>
      <Text>{mb.chipset}</Text>
      <Text>{mb.form}</Text>
    </View>
  );
}
