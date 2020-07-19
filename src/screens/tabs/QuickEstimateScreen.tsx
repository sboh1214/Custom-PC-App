import React, {useState} from 'react';
import SegmentedControl from '@react-native-community/segmented-control';
import {Text, View, Button, StyleSheet, Alert, TextInput} from 'react-native';
import Slider from '@react-native-community/slider';
import {makeQuote, QuoteResponse} from 'utils/server';
import {useNavigation} from '@react-navigation/native';
import {addQuote} from 'utils/storage';
import {SCREEN} from 'utils/navigation';
import {Header, useThemeColors, useContentStyles} from 'utils/theme';

export default function QuickEstimateScreen() {
  const navigation = useNavigation();
  const colors = useThemeColors();
  const contentStyles = useContentStyles();

  const [budget, setBudget] = useState<number>(100);
  const [ssd, setSsd] = useState<number>(0);
  const [ram, setRam] = useState<number>(0);
  const [hdd, setHdd] = useState<number>(0);
  const [ssdType, setSsdType] = useState<number>(0);
  const [cpu, setCpu] = useState<number>(0);

  const [name, setName] = React.useState(new Date().toISOString());

  const styles = StyleSheet.create({
    itemText: {color: colors.text, fontSize: 16, marginLeft: 12, marginTop: 24},
    budgetText: {
      color: colors.text,
      fontSize: 16,
      marginLeft: 6,
      alignSelf: 'center',
    },
    segment: {marginHorizontal: 12, marginVertical: 3},
    slider: {flex: 1},
    horizontalView: {flexDirection: 'row', marginHorizontal: 12},
    input: {
      marginHorizontal: 12,
      marginVertical: 6,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 12,
    },
    button: {backgroundColor: '#00000000', margin: 12},
  });

  return (
    <View style={contentStyles.content}>
      <Header title={SCREEN.QuickEstimate} />
      <Text style={styles.itemText}>예산</Text>
      <View style={styles.horizontalView}>
        <Slider
          style={styles.slider}
          value={budget}
          step={10}
          onValueChange={(newBudget) => {
            setBudget(newBudget);
          }}
          minimumValue={80}
          maximumValue={300}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor={colors.border}
        />
        <Text style={styles.budgetText}>{budget}만원</Text>
      </View>
      <Text style={styles.itemText}>SSD 용량</Text>
      <SegmentedControl
        style={styles.segment}
        values={['250', '500', '1000']}
        selectedIndex={ssd}
        onChange={(event) => {
          setSsd(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <Text style={styles.itemText}>RAM 용량</Text>
      <SegmentedControl
        style={styles.segment}
        values={['자동', '8', '16', '32', '64']}
        selectedIndex={ram}
        onChange={(event) => {
          setRam(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <Text style={styles.itemText}>HDD 용량</Text>
      <SegmentedControl
        style={styles.segment}
        values={['없음', '1', '2', '3', '4']}
        selectedIndex={hdd}
        onChange={(event) => {
          setHdd(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <Text style={styles.itemText}>SSD 타입</Text>
      <SegmentedControl
        style={styles.segment}
        values={['NVME', 'SATA']}
        selectedIndex={ssdType}
        onChange={(event) => {
          setSsdType(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <Text style={styles.itemText}>CPU 제조사</Text>
      <SegmentedControl
        style={styles.segment}
        values={['Intel', 'AMD']}
        selectedIndex={cpu}
        onChange={(event) => {
          setCpu(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <Text style={styles.itemText}>이름</Text>
      <TextInput
        style={styles.input}
        onChangeText={(newName) => setName(newName)}
        value={name}
      />
      <Button
        title="견적 내기"
        onPress={() => {
          let ssd_cap;
          switch (ssd) {
            case 0:
              ssd_cap = 250;
              break;
            case 1:
              ssd_cap = 500;
              break;
            case 2:
              ssd_cap = 1000;
              break;
          }
          let mem_cap;
          switch (ram) {
            case 0:
              mem_cap = 0;
              break;
            case 1:
              mem_cap = 8;
              break;
            case 2:
              mem_cap = 16;
              break;
            case 3:
              mem_cap = 32;
              break;
            case 4:
              mem_cap = 64;
              break;
          }
          let hdd_cap;
          switch (hdd) {
            case 0:
              hdd_cap = -1;
              break;
            case 1:
              hdd_cap = 1;
              break;
            case 2:
              hdd_cap = 2;
              break;
            case 3:
              hdd_cap = 3;
              break;
            case 4:
              hdd_cap = 4;
              break;
          }
          const req = {
            price: budget / 1,
            ssd_cap,
            mem_cap,
            hdd_cap,
            nvme: ssdType === 0 ? true : false,
            intel_or_amd: cpu === 0 ? true : false,
          };
          makeQuote(req)
            .then((res: QuoteResponse) => {
              res.name = name;
              addQuote(res).then(() => {
                navigation.navigate(SCREEN.DetailQuote, {id: res.date});
              });
            })
            .catch(() => {
              Alert.alert('견적을 생성할 수 없습니다');
            });
        }}
      />
    </View>
  );
}
