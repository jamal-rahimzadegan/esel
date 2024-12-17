import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from 'store/store';

export const ProviderForTest = (props) => {
  const { children } = props;
  return <Provider store={store()}>{children}</Provider>;
};

configure({ adapter: new Adapter() });
