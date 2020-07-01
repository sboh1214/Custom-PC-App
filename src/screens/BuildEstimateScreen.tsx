import React from 'react';
import * as NB from 'native-base';
import {useState, useEffect} from 'react';
import {PART, PART_TYPE} from 'utils/parts';
import {getParts} from 'utils/server';
import {FlatList} from 'react-native';
import PartItem from 'components/PartItem';

export default function BuildEstimateScreen() {
  const [part, setPart] = useState<PART_TYPE>(PART_TYPE.CPU);
  const [list, setList] = useState<Array<PART>>();

  const onPressReset = () => {};
  const onPressComplete = () => {};

  useEffect(() => {
    getParts(part).then((newList) => {
      setList(newList);
    });
  }, [part]);

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
      <FlatList
        data={list}
        renderItem={({item}) => {
          return <PartItem part={item} partType={part} onClick={() => {}} />;
        }}
      />
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
