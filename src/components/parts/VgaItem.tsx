import {VGA} from 'utils/parts';
import * as NB from 'native-base';
import React from 'react';

export default function VgaItem(vga: VGA): JSX.Element {
  return (
    <NB.ListItem>
      <NB.Text>{vga.price}</NB.Text>
    </NB.ListItem>
  );
}
