import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains HeroBar', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toContainMatchingElement('HeroBar');
  });

  it('contains ButtonSegment', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toContainMatchingElement('ButtonSegment');
  });

  it('initially contains no PrimeSegment', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).not.toContainMatchingElement('PrimeSegment');
  });

  it('contains PrimdSegment after adding number', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().addNumber(42);
    expect(wrapper).toContainMatchingElement('PrimeSegment');
  });
});
