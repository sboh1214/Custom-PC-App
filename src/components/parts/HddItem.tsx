import {HDD} from 'utils/parts';
import * as NB from 'native-base';
import React from 'react';

export default function HddItem(hdd: HDD): JSX.Element {
  return (
    <NB.ListItem>
      <NB.Text>{hdd.price}</NB.Text>
    </NB.ListItem>
  );
}
