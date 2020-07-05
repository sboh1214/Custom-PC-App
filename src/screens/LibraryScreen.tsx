import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {FlatList, View} from 'react-native';

type User = {
  email: string;
  password: string;
};

export default function LibraryScreen() {
  const [list, setList] = useState<Array<any>>();

  const storeData = async () => {
    const jsonValue = JSON.stringify(list);
    if (list) {
      await AsyncStorage.setItem('@Library', jsonValue);
    } else {
      await AsyncStorage.removeItem('@Library');
    }
  };

  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem('@Library');
    if (jsonValue) {
      setList(JSON.parse(jsonValue ?? ''));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData();
  }, [list]);

  return (
    <View>
      <FlatList
        data={list}
        renderItem={() => {
          return <View />;
        }}
      />
    </View>
  );
}
