import React from 'react';
import { shallow, mount } from 'enzyme';

import PrimeSegment from './PrimeSegment';

function expectText(wrapper, text) {
  expect(wrapper.children()).toHaveText(text);
}

describe('<PrimeSegment />', () => {
  it('renders without crashing', () => {
    shallow(<PrimeSegment />);
  });

  it('is a `div` with classes `ui` and `segment`', () => {
    const wrapper = shallow(<PrimeSegment />);
    expect(wrapper).toMatchSelector('div.ui.segment');
  });

  it('displays the correct text when no number is provided', () => {
    const wrapper = shallow(<PrimeSegment />);
    expectText(wrapper, 'No number was specified.');
  });

  it('displays the correct text when a number but no primes are provided', () => {
    const wrapper = shallow(<PrimeSegment number='12' />);
    expectText(wrapper, '12 has no prime factors.');
  });

  // This used to lead to bad output since 0 is falsy.
  it('displays the correct text when number=0 and primes=[]', () => {
    const wrapper = shallow(<PrimeSegment number='0' primes={[]} />);
    expectText(wrapper, '0 has no prime factors.');
  });

  it('displays the correct text when a number and a single prime are provided', () => {
    const wrapper = shallow(<PrimeSegment number='12' primes={[3]} />);
    expectText(wrapper, '12 is prime.');
  });

  it('displays the correct text when a number and multiple primes are provided', () => {
    const wrapper = shallow(<PrimeSegment number='12' primes={[2, 2, 3]} />);
    expectText(wrapper, '12 has prime factors 2, 2, 3.');
  });
});
