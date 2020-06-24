import React from 'react';
import PartItem from 'components/PartItem';
import {Text} from 'react-native';

export default function MbItem({mb}) {
  return (
    <PartItem
      title={mb.name}
      price={mb.price}
      picture={require('img/intel.png')}>
      <Text>{mb.name}</Text>
    </PartItem>
  );
}
