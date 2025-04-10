export const lazyLoad = <T>(importFn: () => Promise<T>): (() => Promise<T>) => {
  let cache: T | null = null;
  return async () => {
    if (!cache) {
      const module = await importFn();
      cache = module;
    }
    return cache;
  };
};
