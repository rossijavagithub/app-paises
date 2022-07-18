export interface Countries {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion:    string;
  languages:    { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Region[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  DJF?: Afn;
  GHS?: Afn;
  BDT?: Afn;
  BYN?: Afn;
  NPR?: Afn;
  XOF?: Afn;
  EUR?: Afn;
  TRY?: Afn;
  BOB?: Afn;
  MUR?: Afn;
  USD?: Afn;
  CRC?: Afn;
  ALL?: Afn;
  MGA?: Afn;
  PKR?: Afn;
  MWK?: Afn;
  MKD?: Afn;
  AUD?: Afn;
  KID?: Afn;
  AZN?: Afn;
  SYP?: Afn;
  CZK?: Afn;
  BWP?: Afn;
  ZMW?: Afn;
  KES?: Afn;
  KZT?: Afn;
  SLL?: Afn;
  AOA?: Afn;
  XCD?: Afn;
  KRW?: Afn;
  TWD?: Afn;
  BRL?: Afn;
  XAF?: Afn;
  ANG?: Afn;
  MVR?: Afn;
  MRU?: Afn;
  GNF?: Afn;
  LRD?: Afn;
  PAB?: Afn;
  BND?: Afn;
  SGD?: Afn;
  CUC?: Afn;
  CUP?: Afn;
  CHF?: Afn;
  FJD?: Afn;
  IQD?: Afn;
  UYU?: Afn;
  CLP?: Afn;
  MMK?: Afn;
  YER?: Afn;
  INR?: Afn;
  STN?: Afn;
  GTQ?: Afn;
  VES?: Afn;
  DZD?: Afn;
  MAD?: Afn;
  COP?: Afn;
  NAD?: Afn;
  ZAR?: Afn;
  ETB?: Afn;
  SDG?: Sdg;
  CVE?: Afn;
  HKD?: Afn;
  MDL?: Afn;
  PHP?: Afn;
  ZWL?: Afn;
  ARS?: Afn;
  JPY?: Afn;
  HRK?: Afn;
  KGS?: Afn;
  TZS?: Afn;
  VND?: Afn;
  SCR?: Afn;
  PYG?: Afn;
  BGN?: Afn;
  TND?: Afn;
  ISK?: Afn;
  CDF?: Afn;
  XPF?: Afn;
  RWF?: Afn;
  IDR?: Afn;
  THB?: Afn;
  LAK?: Afn;
  GMD?: Afn;
  NZD?: Afn;
  UGX?: Afn;
  TJS?: Afn;
  AMD?: Afn;
  NGN?: Afn;
  SSP?: Afn;
  SOS?: Afn;
  AFN?: Afn;
  LKR?: Afn;
  RSD?: Afn;
  MOP?: Afn;
  PLN?: Afn;
  GYD?: Afn;
  LBP?: Afn;
  BIF?: Afn;
  SRD?: Afn;
  PEN?: Afn;
  VUV?: Afn;
  IRR?: Afn;
  HNL?: Afn;
  EGP?: Afn;
  ILS?: Afn;
  JOD?: Afn;
  PGK?: Afn;
  CNY?: Afn;
  TTD?: Afn;
  MZN?: Afn;
  KPW?: Afn;
  HTG?: Afn;
  UZS?: Afn;
  DOP?: Afn;
  WST?: Afn;
  NIO?: Afn;
}

export interface Afn {
  name:   string;
  symbol: string;
}

export interface Sdg {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
  Turday = "turday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
