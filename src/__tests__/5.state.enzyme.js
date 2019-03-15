import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FavoriteNumber } from '../favorite-number';

Enzyme.configure({ adapter: new Adapter() });

test('render it with enzyme', () => {
  const wrapper = shallow(<FavoriteNumber />);
  const componentInstance = wrapper.instance();

  expect(wrapper.exists()).toBe(true);
  expect(componentInstance.state.number).toBe(0);
});

test('test behaviour', () => {
  const wrapper = shallow(<FavoriteNumber />);
  const componentInstance = wrapper.instance();

  componentInstance.handleChange({
    target: { value: 3 },
  });
  expect(componentInstance.state.number).toBe(3);
});
