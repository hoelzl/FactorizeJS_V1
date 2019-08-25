import React from 'react';
import HeroBar from './HeroBar';
import NumberInputSegment from './NumberInputSegment';

import PrimeSegment from './PrimeSegment';
import factorize from './factorize';

/**
 * The main entry point for the application
 */
class App extends React.Component {
  state = { numbers: [] };

  /**
   * Adds the value of `stringOrNumber` to `this.state.numbers` if it can
   * be converted to an integer. Otherwise leaves the state unmodified.
   * @param {string | number} stringOrNumber - Representation of the number to add
   */
  addNumber = stringOrNumber => {
    const number = isNaN(stringOrNumber)
      ? parseInt(stringOrNumber)
      : stringOrNumber;
    if (!isNaN(number)) {
      this.setState({ numbers: this.state.numbers.concat([number]) });
    }
  };

  render(props) {
    return (
      <div className='ui container text'>
        <HeroBar icon='cogs'>Prime Factorization</HeroBar>
        <NumberInputSegment
          labelText='Please type a number to be factorized.'
          onSubmit={this.addNumber}
        />
        {this.state.numbers.map((number, index) => (
          <PrimeSegment
            key={index}
            number={number}
            primes={factorize(number)}
          />
        ))}
      </div>
    );
  }
}

export default App;
