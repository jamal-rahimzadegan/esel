import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { ProviderForTest } from '../setupTests';
import Header from '../../layout/header/Header';
import { BackBtn, HeaderContainer } from '../../layout/LayoutStyle';
import { screen } from '@testing-library/react';
import '../mocks/use-router';

describe('Header ', () => {
  let header;
  beforeEach(() => {
    header = mount(
      <ProviderForTest>
        <Header />
      </ProviderForTest>
    );
  });

  it('renders header', () => {
    expect(header.find(HeaderContainer).prop('isOnHomePage')).toBeDefined();
  });

  it('renders back btn on other pages', () => {
    const back = screen.getByAltText('back');
    expect(back).toHaveProperty('alt', 'back');
  });

  it('does not render back btn on home page', () => {
    expect(header.find(BackBtn).exists()).toBeFalsy();
  });
});
