import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export const useDebounce = (fn?: (text: string) => void, delay = 500) => {
  let timeoutId: NodeJS.Timeout;

  const latter = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    clearTimeout(timeoutId);
    const val = e.nativeEvent.text;

    timeoutId = setTimeout(() => {
      if (fn !== undefined) {
        fn(val);
      }
    }, delay);
  };

  return latter;
};
