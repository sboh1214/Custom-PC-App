import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {FlatList, View, RefreshControl} from 'react-native';
import {getAllQuote} from 'utils/storage';
import QuoteItem from 'components/QuoteItem';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from 'utils/navigation';
import {Header} from 'utils/theme';

export default function LibraryScreen() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState<boolean>(true);
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
    getAllQuote()
      .then((value) => {
        setList(value);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(true);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData();
  }, [list]);

  return (
    <View style={{flex: 1}}>
      <Header title={SCREEN.Library} />
      <FlatList
        style={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => {
              getData();
            }}
          />
        }
        data={list}
        renderItem={(item) => {
          return (
            <QuoteItem
              id={item.item}
              click={() => {
                navigation.navigate(SCREEN.DetailQuote, {id: item.item});
              }}
            />
          );
        }}
      />
    </View>
  );
}
