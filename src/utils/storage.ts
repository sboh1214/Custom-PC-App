import {QuoteResponse} from './server';
import AsyncStorage from '@react-native-community/async-storage';

enum STORAGE {
  LIBRARY = '@library',
}

export async function addQuote(res: QuoteResponse) {
  const library = JSON.parse(
    (await AsyncStorage.getItem(STORAGE.LIBRARY)) ?? '[]',
  );
  await AsyncStorage.setItem(
    STORAGE.LIBRARY,
    JSON.stringify([...library, res.date]),
  );
  console.log(res);
  await AsyncStorage.setItem(res.date, JSON.stringify(res));
}

export async function getAllQuote() {
  const jsonValue = await AsyncStorage.getItem(STORAGE.LIBRARY);
  return JSON.parse(jsonValue ?? '[]');
}

export async function getQuoteById(id: string) {
  const jsonValue = await AsyncStorage.getItem(id);
  return JSON.parse(jsonValue ?? '{}');
}
