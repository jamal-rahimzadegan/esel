/**
 * @jest-environment node
 */

// @ts-nocheck

import { ls } from 'utils';

describe('LS on SSR is OK', () => {
  it('Get', () => {
    expect(ls.get('testKey').msg).toBe('error in getting testKey');
    expect(ls.getMultiple(['key1', 'key2']).msg).toBe('error in getting multiple');
    expect(ls.getAll().msg).toBe('error in getting all');
  });
});
