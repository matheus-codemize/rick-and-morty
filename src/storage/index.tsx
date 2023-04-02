import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, fallbackValue?: T | (() => T)) {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    const item = localStorage.getItem(key);
    setValue(item ? JSON.parse(item) : fallbackValue);
  }, []);

  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
