import React from 'react';

class InputSegment extends React.Component {
  state = { text: '' };

  static defaultProps = {
    labelText: 'Please enter some text',
    buttonText: 'Submit',
    initialValue: '',
    onSubmit: _ => {},
    inputValidator: _ => true
  };

  setValue = str => {
    if (str !== this.state.text && this.props.inputValidator(str)) {
      this.setState({
        text: str
      });
    }
  };

  componentDidMount() {
    this.setValue(this.props.initialValue);
  }

  onInputChange = event => {
    this.setValue(event.target.value);
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='ui field'>
            <label className='ui label'>{this.props.labelText}</label>
            <input
              type='text'
              value={this.state.text}
              onChange={this.onInputChange}
            />
          </div>
          <button className='ui button fluid' type='submit'>
            {this.props.buttonText}
          </button>
        </form>
      </div>
    );
  }
}

export default InputSegment;
