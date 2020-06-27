import {RAM} from 'utils/parts';
import React from 'react';
import PartItem from 'components/PartItem';
import {Text} from 'react-native';

export default function RamItem(ram: RAM): JSX.Element {
  return (
    <PartItem
      title={'ram'}
      price={ram.price}
      picture={require('img/ram/samsung.png')}>
      <Text>Hello</Text>
    </PartItem>
  );
}
