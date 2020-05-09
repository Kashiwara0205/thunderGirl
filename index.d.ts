declare module 'thunder-girl' {
  export function load<T>(destination_arr: T[], source_arr: T[], slice: number, msec: number): () => Promise<void>;
  export function accLoad<T>(destination_arr: T[], source_arr: T[], slice: number, msec: number): () => Promise<void>;
}
