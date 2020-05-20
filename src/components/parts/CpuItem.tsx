import {CPU} from 'src/utils/parts';
import * as NB from 'native-base';
import React from 'react';

export default function CpuItem(cpu: CPU): JSX.Element {
  return (
    <NB.ListItem>
      <NB.Text>{cpu.clock}</NB.Text>
    </NB.ListItem>
  );
}
