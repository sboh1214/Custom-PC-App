import {VGA} from 'utils/parts';
import React from 'react';
import PartItem from 'components/PartItem';
import {Text} from 'react-native';

export default function VgaItem(vga: VGA): JSX.Element {
  return (
    <PartItem title={'VGA'} price={vga.price} picture>
      <Text>Hello</Text>
    </PartItem>
  );
}
