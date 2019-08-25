import React from 'react';
import { shallow, mount } from 'enzyme';

import InputSegment from './InputSegment';

describe('<InputSegment>', () => {
  it('renders without crashing', () => {
    shallow(<InputSegment />);
  });

  it('has a form element', () => {
    const wrapper = shallow(<InputSegment />);

    expect(wrapper).toContainMatchingElement('form');
  });

  it('has an input element nested inside the form', () => {
    const wrapper = shallow(<InputSegment />);
    const form = wrapper.find('form');

    expect(form).toContainMatchingElement('input');
  });

  it('has an empty string as initial default value of its input element', () => {
    const wrapper = shallow(<InputSegment />);

    expect(wrapper.find('input')).toHaveValue('');
  });

  it('uses prop `initialValue` as initial value of its input element', () => {
    const initialValue = 'AN_INITIAL_VALUE';
    const wrapper = shallow(<InputSegment initialValue={initialValue} />);

    expect(wrapper.find('input')).toHaveValue(initialValue);
  });

  it('initially sets `state.text` to the value of prop `initialValue`', () => {
    const initialValue = 'AN_INITIAL_VALUE';
    const wrapper = shallow(<InputSegment initialValue={initialValue} />);

    expect(wrapper.state('text')).toBe(initialValue);
  });

  it('updates the value of its `input` when the state changes', () => {
    const newValue = 'A_NEW_VALUE';
    const wrapper = shallow(<InputSegment />);
    wrapper.setState({ text: newValue }, () => {
      expect(wrapper.find('input')).toHaveValue(newValue);
    });
  });

  it('updates the state when the value of its `input` changes', () => {
    const newValue = 'A_NEW_VALUE';
    const wrapper = shallow(<InputSegment />);

    const input = wrapper.find('input');
    input.simulate('change', { target: { value: newValue } });
    expect(wrapper.state('text')).toBe(newValue);
  });

  it('does not update the state when inputValidator returns false', () => {
    const oldValue = 'THE_OLD_VALUE';
    const newValue = 'THE_NEW_VALUE';
    let hasValidatorDeniedRequest = false;
    // Only deny `newValue` otherwise the validator will prevent setting of
    // the initial value.
    const inputValidator = str => {
      if (str === newValue) {
        hasValidatorDeniedRequest = true;
        return false;
      }
      return true;
    };
    const wrapper = shallow(
      <InputSegment initialValue={oldValue} inputValidator={inputValidator} />
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: newValue } });

    expect(hasValidatorDeniedRequest).toBe(true);
    expect(wrapper.state('text')).toBe(oldValue);
  });

  it('triggers the `onSubmit` callback correctly when submited', () => {
    let callbackValue = undefined;
    let providedValue = 'THE_VALUE';
    const onSubmit = str => (callbackValue = str);
    const wrapper = shallow(
      <InputSegment initialValue={providedValue} onSubmit={onSubmit} />
    );

    wrapper.find('form').simulate('submit', { preventDefault: _ => {} });
    expect(callbackValue).toBe(providedValue);
  });
});
