import React, {useState} from 'react';
import SegmentedControl from '@react-native-community/segmented-control';
import {Text, View} from 'react-native';

export default function QuickEstimateScreen() {
  const onPressReset = () => {};
  const onPressComplete = () => {};

  const [ssd, setSsd] = useState<number>(0);
  const [ram, setRam] = useState<number>(0);
  const [hdd, setHdd] = useState<number>(0);
  const [ssdType, setSsdType] = useState<number>(0);
  const [cpu, setCpu] = useState<number>(0);

  return (
    <View>
      <Text>SSD 용량</Text>
      <SegmentedControl
        values={['250', '500', '1000']}
        selectedIndex={ssd}
        onChange={(event) => {
          setSsd(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <Text>RAM 용량</Text>
      <SegmentedControl
        values={['8', '16', '32', '64']}
        selectedIndex={ram}
        onChange={(event) => {
          setRam(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <Text>HDD 용량</Text>
      <SegmentedControl
        values={['없음', '1', '2', '3', '4']}
        selectedIndex={hdd}
        onChange={(event) => {
          setHdd(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <Text>SSD 타입</Text>
      <SegmentedControl
        values={['NVME', 'SATA']}
        selectedIndex={ssdType}
        onChange={(event) => {
          setSsdType(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <Text>CPU 제조사</Text>
      <SegmentedControl
        values={['Intel', 'AMD']}
        selectedIndex={cpu}
        onChange={(event) => {
          setCpu(event.nativeEvent.selectedSegmentIndex);
        }}
      />
    </View>
  );
}
