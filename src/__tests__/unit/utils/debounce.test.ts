import { debounce } from 'utils';

describe('debounce', () => {
  // @ts-ignore
  it('does not break with no args', () => expect(debounce()).toThrow());

  it('works with valid args', () => {
    expect(debounce(() => {}, 300)).not.toThrow();
  });
});
