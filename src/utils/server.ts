import {PART_TYPE} from './parts';
import {Platform} from 'react-native';

const HOST =
  Platform.OS === 'android' ? 'http://10.0.2.2:8000/' : 'http://0.0.0.0:8000/';

type QuoteRequest = {
  price: number;
  ssd_cap: number;
  mem_cap: number;
  hdd_cap: number;
  nvme: boolean;
  intel_or_amd: boolean;
};

export type QuoteResponse = {
  name: string;
  tot_price: number;
  date: string;
  cpu: number;
  cpu_count: number;
  mb: number;
  mb_count: number;
  ram: number;
  ram_count: number;
  vga: number;
  vga_count: number;
  ssd: number;
  ssd_count: number;
  hdd: number;
  hdd_count: number;
  case: number;
  case_count: number;
  psu: number;
  psu_count: number;
};

export async function makeQuote(req: QuoteRequest) {
  try {
    const res = await fetch(HOST + 'quotemaker/makequote/', {
      method: 'POST',
      body: JSON.stringify(req),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getParts(type: PART_TYPE) {
  const res = await fetch(`${HOST}quotemaker/parts/${type}/`);
  return await res.json();
}

export async function getPartById(type: PART_TYPE, id: number) {
  const res = await fetch(`${HOST}quotemaker/parts/${type}/${id}/`);
  return await res.json();
}
