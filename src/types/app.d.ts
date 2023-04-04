declare namespace App {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type Any = any;

  export interface Dictionary<T> {
    [key: number | string]: T;
  }
}
