import {CPU} from 'utils/parts';
import * as NB from 'native-base';
import React from 'react';

export default function CpuItem(cpu: CPU): JSX.Element {
  return (
    <NB.ListItem>
      <NB.Image source={require('../../img/intel.png')} />
      <NB.Text>{cpu.name}</NB.Text>
      <NB.Text>Socket : {cpu.socket}</NB.Text>
      <NB.Text>
        {cpu.core} Core {cpu.thread} Thread
      </NB.Text>
      <NB.Text>{cpu.clock} GHz</NB.Text>
    </NB.ListItem>
  );
}
