import React from 'react';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FavoriteNumber } from '../favorite-number';

Enzyme.configure({ adapter: new Adapter() });

test('render it with enzyme', () => {
  const wrapper = shallow(<FavoriteNumber />);
  const componentInstance = wrapper.instance();

  expect(wrapper.exists()).toBe(true);
  expect(componentInstance.state.number).toBe(0);
});

test('test implementation detail', () => {
  const wrapper = shallow(<FavoriteNumber />);
  const componentInstance = wrapper.instance();

  componentInstance.handleChange({
    target: { value: 3 },
  });
  expect(componentInstance.state.number).toBe(3);
});

test('test behaviour with change', () => {
  const wrapper = shallow(<FavoriteNumber />);
  const input = wrapper.find('input');

  input.simulate('change', {
    target: { value: 3 },
  });

  expect(wrapper.instance().state.number).toBe(3);
  // expect(input.props().value).toBe(3);
});

test('test with render', () => {
  const wrapper = render(<FavoriteNumber />);
  const input = wrapper.find('input');

  const changeEvent = document.createEvent('HTMLEvents');
  changeEvent.initEvent('change', false, true);
  // document.getElementsByTagName('input')[0].dispatchEvent(changeEvent);

  // expect(input.val()).toBe(3);
  expect(input.val()).toBe('0');
});
