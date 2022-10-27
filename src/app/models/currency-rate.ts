export interface CurrencyRate {
  base: string;
  date: string;
  motd: object;
  rates: { [key: string]: number };
  success: boolean;
}
