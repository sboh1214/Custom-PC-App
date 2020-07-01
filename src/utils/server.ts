import {PART_TYPE} from './parts';

const HOST = 'http://0.0.0.0:8000/';

type QuoteRequest = {
  price: number;
  ssd_cap: number;
  mem_cap: number;
  hdd_cap: number;
  nvme: boolean;
  intel_or_amd: boolean;
};

type QuoteResponse = {
  name: string;
  tot_price: number;
  date: string;
};

export async function makeQuote(req: QuoteRequest) {
  const res = await fetch(HOST + 'quotemaker/makequote/');
}

export async function getParts(part: PART_TYPE) {
  const res = await fetch(HOST + 'quotemaker/parts/' + part);
  return await res.json();
}
