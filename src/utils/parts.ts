export enum PART_TYPE {
  CPU = 'cpu',
  MB = 'mb',
  RAM = 'ram',
  VGA = 'vga',
  SSD = 'ssd',
  HDD = 'hdd',
  CASE = 'case',
  PSU = 'psu',
}

export type PartList = Array<PART>;

export type PART = CPU | MB | RAM | VGA | SSD | HDD | CASE | PSU;

export type CPU = CPU_ONLY & PART_BASE;
export type MB = MB_ONLY & PART_BASE;
export type RAM = RAM_ONLY & PART_BASE;
export type VGA = VGA_ONLY & PART_BASE;
export type SSD = SSD_ONLY & PART_BASE;
export type HDD = HDD_ONLY & PART_BASE;
export type CASE = CASE_ONLY & PART_BASE;
export type PSU = PSU_ONLY & PART_BASE;

type PART_BASE = {
  pk: number;
  name: string;
  maker: string;
  url: string;
  image: string;
  price: number;
};

type CPU_ONLY = {
  gen: string;
  socket: string;
  core: number;
  thread: number;
  clock: number;
};

type MB_ONLY = {
  socket: string;
  chipset: string;
  form: string; //ATX
};

type RAM_ONLY = {
  gen: string;
  capacity: number;
  clock: number;
};

type VGA_ONLY = {
  chipmaker: string; //nvidia, amd
  chipset: string;
  memcap: number;
  length: number;
  price: number;
};

export type SSD_ONLY = {
  nvme: boolean;
  capacity: number;
  memtype: string;
};

export type HDD_ONLY = {
  capacity: number;
  rotspeed: string;
};

export type CASE_ONLY = {
  size: string;
  atx: boolean;
  m_atx: boolean;
  m_itx: boolean;
  vga_len: number;
};

export type PSU_ONLY = {
  capacity: number;
  cert: string; //80PLUS Certification
};
