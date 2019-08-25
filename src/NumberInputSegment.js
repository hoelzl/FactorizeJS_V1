import React from 'react';
import InputSegment from './InputSegment';

const numberRegex = /^[0-9]*$/;
function isValidInput(str) {
  return numberRegex.test(str);
}

class NumberInputSegment extends React.Component {
  static defaultProps = {
    labelText: 'Please type a number',
    buttonText: 'Submit',
    initialValue: '42',
    onSubmit: _ => {},
    inputValidator: str => isValidInput(str.trim())
  };

  render() {
    return <InputSegment {...this.props} />;
  }
}

export default NumberInputSegment;
