import { useMemo } from 'react';

export default function useComponentWillMount(fn: () => {}): any {
  useMemo(fn, []);
}
