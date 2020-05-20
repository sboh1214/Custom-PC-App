import {MB} from 'src/utils/parts';
import * as NB from 'native-base';
import React from 'react';

export default function MbItem(mb: MB): JSX.Element {
  return (
    <NB.ListItem>
      <NB.Text>{mb.price}</NB.Text>
    </NB.ListItem>
  );
}
