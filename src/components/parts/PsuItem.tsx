import {PSU} from 'utils/parts';
import * as NB from 'native-base';
import React from 'react';

export default function PsuItem(psu: PSU): JSX.Element {
  return (
    <NB.ListItem>
      <NB.Text>{psu.price}</NB.Text>
    </NB.ListItem>
  );
}
