import React from 'react';
import { shallow } from 'enzyme';
import { Btn } from 'components';
import { ProviderForTest } from '../setupTests';

describe('Component: Button', () => {
  it('isHome prop is working fine', () => {
    // @ts-ignore
    const wrapper = shallow(
      <ProviderForTest>
        <Btn isHome={true} children="myBtn" />
      </ProviderForTest>
    );
    // finds isHome prop in the styled-component-tag
    expect(wrapper.find(Btn).prop('isHome')).toBe(true);
    // expect(wrapper.find(ButtonStyle).prop('isHome')).toBe(true); // to use without Redux
  });
});
