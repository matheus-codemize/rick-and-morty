import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, fallbackValue?: T | (() => T)) {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    const item = localStorage.getItem(key);
    setValue(item ? JSON.parse(item) : fallbackValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
