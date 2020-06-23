import {RAM} from 'utils/parts';
import * as NB from 'native-base';
import React from 'react';

export default function RamItem(ram: RAM): JSX.Element {
  return (
    <NB.ListItem>
      <NB.Text>{ram.clock}</NB.Text>
    </NB.ListItem>
  );
}
