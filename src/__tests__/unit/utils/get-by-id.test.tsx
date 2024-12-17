import React from 'react';
import { getById } from 'utils';

describe('getById', () => {
  beforeAll(() => (document.body.innerHTML = `<input id="test-div-element" value='test' />`));

  it('returns data with correct ID', () => {
    const target = getById('test-div-element');
    // @ts-ignore
    expect(target.value).toBe('test');
  });

  it('returns null if there is no element has the ID', () => {
    const target = getById('fake-id');
    expect(target).toBeNull();
  });
});
