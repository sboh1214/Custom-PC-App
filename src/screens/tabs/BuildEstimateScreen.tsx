import React, {useLayoutEffect} from 'react';
import {useState, useEffect} from 'react';
import {PART, PART_TYPE} from 'utils/parts';
import {getParts} from 'utils/server';
import {FlatList, TextInput, RefreshControl, View} from 'react-native';
import PartItem from 'components/PartItem';
import {Picker} from '@react-native-community/picker';

export default function BuildEstimateScreen({navigation}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [part, setPart] = useState<PART_TYPE>(PART_TYPE.CPU);
  const [list, setList] = useState<Array<PART>>();
  const [filteredList, setFilteredList] = useState<Array<PART>>();
  const [query, setQuery] = useState<string>('');

  const onPressReset = () => {};
  const onPressComplete = () => {};

  navigation.setOptions({
    headerTitle: (props) => (
      <TextInput
        {...props}
        placeholder="Search"
        placeholderTextColor="#FFFF"
        style={{
          fontSize: 24,
        }}
      />
    ),
  });

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

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
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
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 24,
              }}
              placeholder="Search"
              onChangeText={(text) => setQuery(text)}
              value={query}
            />
          );
        }}
        renderItem={({item}) => {
          return <PartItem part={item} partType={part} onClick={() => {}} />;
        }}
      />
      <Picker
        mode="dropdown"
        style={{flex: 0, height: 180}}
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
    </View>
  );
}
