export interface Convertation {
  motd: {
    msg: string;
    url: string;
  };
  success: true;
  query: {
    from: string;
    to: string;
    amount: string;
  };
  info: { rate: null };
  historical: false;
  date: '2022-10-27';
  result: number;
}
