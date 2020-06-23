import {SSD} from 'utils/parts';
import * as NB from 'native-base';
import React from 'react';

export default function CpuItem(ssd: SSD): JSX.Element {
  return (
    <NB.ListItem>
      <NB.Text>{ssd.price}</NB.Text>
    </NB.ListItem>
  );
}
