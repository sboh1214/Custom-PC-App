import React from 'react';
import {Text} from 'react-native';
import PartItem from 'components/PartItem';

export default function CpuItem({cpu}) {
  let picture;
  switch (cpu.maker) {
    case '인텔':
      picture = require('img/cpu/intel.png');
      break;
    case 'AMD':
      picture = require('img/cpu/amd.png');
      break;
    default:
      break;
  }

  return (
    <PartItem title={cpu.name} price={cpu.price} picture={picture}>
      <Text>{cpu.maker}</Text>
      <Text>{`Socket : ${cpu.socket}`}</Text>
      <Text>{`${cpu.core} Core ${cpu.thread} Thread`}</Text>
      <Text>{`${cpu.clock} GHz`}</Text>
    </PartItem>
  );
}
