import * as NB from 'native-base';
import React from 'react';
import {CASE} from 'utils/parts';

export default function CaseItem(caseConst: CASE): JSX.Element {
  return (
    <NB.ListItem>
      <NB.Text>{caseConst.board}</NB.Text>
    </NB.ListItem>
  );
}
