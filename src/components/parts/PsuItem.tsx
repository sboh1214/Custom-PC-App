import {PSU} from 'utils/parts';
import React from 'react';
import PartItem from 'components/PartItem';
import {Text} from 'react-native';

export default function PsuItem(psu: PSU): JSX.Element {
  return (
    <PartItem
      title={'PSU'}
      price={psu.price}
      picture={require('img/cpu/intel.png')}>
      <Text>Hello</Text>
    </PartItem>
  );
}
