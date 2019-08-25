import React from 'react';

const numberRegex = /^[0-9]*$/;
function isValidInput(str) {
  return numberRegex.test(str);
}

class ButtonSegment extends React.Component {
  state = { textInput: '42' };

  static defaultProps = {
    onFactorize: _ => {},
    labelText: 'Please type a number'
  };

  onInputChange = event => {
    let inputString = event.target.value;
    if (!isValidInput(inputString.trim())) {
      inputString = this.state.textInput;
    }
    this.setState({ textInput: inputString }, () => console.log(this.state));
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFactorize(this.state.textInput);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='ui field'>
            <label className='ui label'>{this.props.labelText}</label>
            <input
              type='text'
              value={this.state.textInput}
              onChange={this.onInputChange}
            />
          </div>
          <button className='ui button fluid' type='submit'>
            Factorize
          </button>
        </form>
      </div>
    );
  }
}

export default ButtonSegment;
