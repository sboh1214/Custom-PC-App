export enum PART {
  CPU = 'cpu',
  MB = 'mb',
  RAM = 'ram',
  VGA = 'vga',
  SSD = 'ssd',
  HDD = 'hdd',
  CASE = 'case',
  PSU = 'psu',
}

export type CPU = {
  maker: string;
  gen: string;
  socket: string;
  core: number;
  thread: number;
  clock: number;
  price: number;
};

export type MB = {
  maker: string;
  socket: string;
  chipset: string;
  form: string; //ATX
  price: number;
};

export type RAM = {
  maker: string;
  gen: string;
  capacity: number;
  clock: number;
  price: number;
};

export type VGA = {
  maker: string;
  chipmaker: string; //nvidia, amd
  chipset: string;
  memcap: number;
  length: number;
  price: number;
};

export type SSD = {
  maker: string;
  nvme: boolean;
  capacity: number;
  memtype: string;
  price: number;
};

export type HDD = {
  maker: string;
  capacity: number;
  rotspeed: string;
  price: number;
};

export type CASE = {
  maker: string;
  size: string;
  board: string;
  vgalen: number;
  price: number;
};

export type PSU = {
  maker: string;
  capacity: number;
  cert: string; //80PLUS Certification
  price: number;
};

export type PartList = Array<CPU | MB | RAM | VGA | SSD | HDD | CASE | PSU>;
