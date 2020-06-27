import {SSD} from 'utils/parts';
import React from 'react';
import PartItem from 'components/PartItem';
import {Text} from 'react-native';

export default function CpuItem(ssd: SSD): JSX.Element {
  return (
    <PartItem
      title={'SSD'}
      price={ssd.price}
      picture={require('img/cpu/intel.png')}>
      <Text>Hello</Text>
    </PartItem>
  );
}
