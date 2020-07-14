import React, {useLayoutEffect} from 'react';
import {useState, useEffect} from 'react';
import {PART, PART_TYPE} from 'utils/parts';
import {getParts} from 'utils/server';
import {
  FlatList,
  TextInput,
  RefreshControl,
  View,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';
import PartItem from 'components/PartItem';
import {Picker} from '@react-native-community/picker';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from 'utils/navigation';

export default function BuildEstimateScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.addListener('focus', setHeaderOptions);
  }, [navigation]);

  const setHeaderOptions = () => {
    navigation?.dangerouslyGetParent()?.setOptions({
      headerTitle: () => <Text>{SCREEN.BuildEstimate}</Text>,
      headerRight: () => {},
    });
  };

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [part, setPart] = useState<PART_TYPE>(PART_TYPE.CPU);
  const [list, setList] = useState<Array<PART>>();
  const [filteredList, setFilteredList] = useState<Array<PART>>();
  const [query, setQuery] = useState<string>('');

  const onPressReset = () => {};
  const onPressComplete = () => {};

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

  const styles = StyleSheet.create({
    picker: {flex: 0, height: Platform.OS === 'android' ? 60 : 180},
  });

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
        style={styles.picker}
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
