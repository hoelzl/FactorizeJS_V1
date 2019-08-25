import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import HeroBar from './HeroBar';
import ButtonSegment from './ButtonSegment';
import PrimeSegment from './PrimeSegment';

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

describe('<App /> (different testing strategy)', () => {
  it('is a div', () => {
    expect(shallow(<App />).type()).toBe('div');
  });

  it('has classes `ui`, `container` and `text`.', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toHaveClassName('ui container text');
  });

  it('has two children', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.children().length).toBe(2);
  });

  it('has HeroBar as first child', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.childAt(0).type()).toBe(HeroBar);
  });

  it('has ButtonSegment as second child', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.childAt(1).type()).toBe(ButtonSegment);
  });

  it('has three children after adding a number', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().addNumber(42);

    expect(wrapper.children().length).toBe(3);
  });

  it('has PrimeSegment as third child', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().addNumber(42);

    expect(wrapper.childAt(2).type()).toBe(PrimeSegment);
  });
});

describe('<App /> (snapshot test)', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
