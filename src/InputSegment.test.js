import React from 'react';
import { shallow, mount } from 'enzyme';

import InputSegment from './InputSegment';

describe('<InputSegment>', () => {
  it('renders without crashing', () => {
    shallow(<InputSegment />);
  });

  it('has an input element', () => {
    const wrapper = shallow(<InputSegment />);

    expect(wrapper).toContainMatchingElement('input');
  });

  it('has an empty string as initial default value of its input field', () => {
    const wrapper = shallow(<InputSegment />);

    expect(wrapper.find('input')).toHaveValue('');
  });

  it('uses prop `initialValue` as initial value of its input field', () => {
    const initialValue = 'AN_INITIAL_VALUE';
    const wrapper = shallow(<InputSegment initialValue={initialValue} />);

    expect(wrapper.find('input')).toHaveValue(initialValue);
  });
});
