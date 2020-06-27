import React, {useEffect, useState} from 'react';
import * as NB from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

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
    <NB.Container>
      <NB.Header>
        <NB.Left />
        <NB.Body>
          <NB.Title>보관함</NB.Title>
        </NB.Body>
        <NB.Right />
      </NB.Header>
      <NB.Content>
        <NB.List />
      </NB.Content>
    </NB.Container>
  );
}
