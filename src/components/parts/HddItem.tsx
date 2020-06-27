import {HDD} from 'utils/parts';
import React from 'react';
import PartItem from 'components/PartItem';
import {Text} from 'react-native';

export default function HddItem(hdd: HDD): JSX.Element {
  return (
    <PartItem
      title={'HDD'}
      price={hdd.price}
      picture={require('img/cpu/intel.png')}>
      <Text>Hello</Text>
    </PartItem>
  );
}
