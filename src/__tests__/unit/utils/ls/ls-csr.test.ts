// @ts-nocheck
import { ls } from 'utils';

describe('LS on CSR is OK', () => {
  it('Get', () => {
    ls.set('singleKey', 'singleValue');
    ls.setMultiple([{ key1: 'value1' }, { key2: 'value2' }]);

    expect(ls.get('singleKey')).toBe('singleValue');
    expect(ls.getMultiple(['key1', 'key2'])).toStrictEqual({ key1: 'value1', key2: 'value2' });
    expect(ls.getAll()).toStrictEqual({ key2: 'value2', key1: 'value1', singleKey: 'singleValue' });
  });
});
