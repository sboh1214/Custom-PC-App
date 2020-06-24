import React from 'react';
import * as NB from 'native-base';
import {useState, useEffect} from 'react';
import {PartList, PART} from 'utils/parts';
import CpuItem from 'components/parts/CpuItem';
import CaseItem from 'components/parts/CaseItem';
import MbItem from 'components/parts/MbItem';

const HOST = 'http://10.140.82.117:8000/';

export default function BuildEstimateScreen() {
  const [part, setPart] = useState<string>('cpu');
  const [list, setList] = useState<Array<PART>>();

  const onPressReset = () => {};
  const onPressComplete = () => {};

  useEffect(() => {
    console.log('fetch');
    fetch(HOST + 'quotemaker/parts/' + part).then((res) => {
      console.log(res);
      res
        .json()
        .then((json: PartList) => {
          setList(json);
        })
        .catch((netErr) => {
          console.log(netErr);
        });
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
      <NB.Content>
        <NB.List>
          {list?.map((item) => {
            console.log(item);
            switch (part) {
              case PART.CPU:
                return <CpuItem cpu={item} />;
              case PART.MB:
                return <MbItem mb={item} />;
              case PART.CASE:
                return <CaseItem caseItem={item} />;
              default:
                return <NB.Text>Error</NB.Text>;
            }
          })}
        </NB.List>
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
