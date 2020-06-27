import React from 'react';
import {CASE} from 'utils/parts';
import PartItem from 'components/PartItem';
import {Text} from 'react-native';

export default function CaseItem(caseItem: CASE): JSX.Element {
  return (
    <PartItem
      title={caseItem.board}
      price={caseItem.price}
      picture={require('img/cpu/intel.png')}>
      <Text>Hello</Text>
    </PartItem>
  );
}
