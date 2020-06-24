import React from 'react';
import {CASE} from 'utils/parts';
import * as NB from 'native-base';

export default function CaseItem(caseItem: CASE): JSX.Element {
  return (
    <NB.ListItem>
      <NB.Text>{caseItem.price}</NB.Text>
    </NB.ListItem>
  );
}
