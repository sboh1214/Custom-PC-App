import * as React from 'react';
import * as NB from 'native-base';
import {useState} from 'react';

export default function BuildEstimateScreen() {
  const [part, setPart] = useState<string>('key0');

  const onPressReset = () => {};
  const onPressComplete = () => {};

  return (
    <NB.Container>
      <NB.Header>
        <NB.Left>
          <NB.Button transparent onPress={onPressReset}>
            <NB.Text>초기화</NB.Text>
          </NB.Button>
        </NB.Left>
        <NB.Body>
          <NB.Title>견적 제작</NB.Title>
        </NB.Body>
        <NB.Right>
          <NB.Button transparent onPress={onPressComplete}>
            <NB.Text>완료</NB.Text>
          </NB.Button>
        </NB.Right>
      </NB.Header>
      <NB.Content>
        <NB.List />
      </NB.Content>
      <NB.Footer>
        <NB.Picker
          note
          mode="dropdown"
          style={{width: 120}}
          selectedValue={part}
          onValueChange={(newValue) => {
            setPart(newValue);
          }}>
          <NB.Picker.Item label="CPU" value="cpu" />
          <NB.Picker.Item label="마더보드" value="mb" />
          <NB.Picker.Item label="RAM" value="ram" />
          <NB.Picker.Item label="그래픽 카드" value="vga" />
          <NB.Picker.Item label="SSD" value="ssd" />
          <NB.Picker.Item label="HDD" value="hdd" />
          <NB.Picker.Item label="CASE" value="case" />
          <NB.Picker.Item label="PSU" value="psu" />
        </NB.Picker>
      </NB.Footer>
    </NB.Container>
  );
}
