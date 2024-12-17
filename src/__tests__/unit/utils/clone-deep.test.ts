import { copyDeep } from 'utils';

describe('copyDeep', () => {
  it('returns data with correct input', () => {
    const obj = { name: 'testObj', innerObj: { name: 'inner' } };
    const arr = [{ name: 'testArr' }];
    expect(copyDeep('obj', obj)).toEqual(obj);
    expect(copyDeep('arr', arr)).toEqual(arr);
  });

  it('does not break with wrong input', () => {
    // @ts-ignore for test
    expect(copyDeep('other', undefined)).toBe(undefined);
  });
});
