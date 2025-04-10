export const compressArray = <T>(arr: T[]): string => {
  return JSON.stringify(arr);
};

export const decompressArray = <T>(compressed: string): T[] => {
  return JSON.parse(compressed);
};
