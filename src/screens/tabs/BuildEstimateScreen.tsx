import React from 'react';
import {useState, useEffect} from 'react';
import {PART, PART_TYPE} from 'utils/parts';
import {getParts, QuoteResponse} from 'utils/server';
import {
  FlatList,
  TextInput,
  RefreshControl,
  View,
  StyleSheet,
  Platform,
  Button,
} from 'react-native';
import PartItem from 'components/PartItem';
import {Picker} from '@react-native-community/picker';
import {SCREEN} from 'utils/navigation';
import {useThemeColors, Header, useContentStyles} from 'utils/theme';
import {addQuote} from 'utils/storage';
import {useNavigation} from '@react-navigation/native';

const defaultQuote: QuoteResponse = {
  name: new Date().toISOString(),
  tot_price: 100,
  date: new Date().toISOString(),
  cpu: undefined,
  cpu_count: 1,
  mb: undefined,
  mb_count: 1,
  ram: undefined,
  ram_count: 1,
  vga: undefined,
  vga_count: 1,
  ssd: undefined,
  ssd_count: 1,
  hdd: undefined,
  hdd_count: 1,
  case: undefined,
  case_count: 1,
  psu: undefined,
  psu_count: 1,
};

export default function BuildEstimateScreen() {
  const navigation = useNavigation();
  const colors = useThemeColors();
  const contentStyles = useContentStyles();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [part, setPart] = useState<PART_TYPE>(PART_TYPE.CPU);
  const [list, setList] = useState<Array<PART>>();
  const [filteredList, setFilteredList] = useState<Array<PART>>();
  const [query, setQuery] = useState<string>('');
  const [quote, setQuote] = useState<QuoteResponse>(defaultQuote);

  const fetchParts = () => {
    getParts(part)
      .then((newList) => {
        setList(newList);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchParts();
  }, [part, isLoading]);

  useEffect(() => {
    if (query === '') {
      setFilteredList(list);
    } else {
      setFilteredList(
        list?.filter((value) => {
          return value.name.includes(query);
        }),
      );
    }
  }, [list, query]);

  const addPart = (newPart: PART, newType: PART_TYPE) => {
    const newQuote: QuoteResponse = {...quote};
    newQuote[newType] = newPart.id;
    console.log(newQuote);
    setQuote(newQuote);
  };

  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 24,
      margin: 6,
      paddingStart: 12,
    },
    picker: {
      flex: 0,
      height: Platform.OS === 'android' ? 60 : 180,
      color: colors.text,
      backgroundColor: colors.card,
    },
    pickerItem: {
      color: colors.text,
    },
  });

  const buildQuote = () => {
    console.log(quote);
    addQuote(quote).then(() => {
      navigation.navigate(SCREEN.DetailQuote, {id: quote.date});
    });
  };

  return (
    <View style={contentStyles.content}>
      <Header title={SCREEN.BuildEstimate} />
      <FlatList
        style={contentStyles.content}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => {
              fetchParts();
            }}
          />
        }
        data={filteredList}
        ListHeaderComponent={() => {
          return (
            <TextInput
              style={styles.input}
              placeholder="Search"
              onChangeText={(text) => setQuery(text)}
              value={query}
            />
          );
        }}
        renderItem={({item}) => {
          return (
            <PartItem
              part={item}
              partType={part}
              style={{textColor: colors.text, highlightColor: colors.primary}}
              isHighlight={item.id === quote[part]}
              onClick={() => {
                addPart(item, part);
              }}
            />
          );
        }}
      />
      <Picker
        mode="dropdown"
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={part}
        onValueChange={(newValue) => {
          setPart(newValue);
        }}>
        <Picker.Item label="CPU" value="cpu" />
        <Picker.Item label="마더보드" value="mb" />
        <Picker.Item label="RAM" value="ram" />
        <Picker.Item label="그래픽 카드" value="vga" />
        <Picker.Item label="SSD" value="ssd" />
        <Picker.Item label="HDD" value="hdd" />
        <Picker.Item label="CASE" value="case" />
        <Picker.Item label="PSU" value="psu" />
      </Picker>
      <Button title="Export" onPress={buildQuote} />
    </View>
  );
}
