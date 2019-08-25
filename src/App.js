import React from 'react';
import HeroBar from './HeroBar';
import ButtonSegment from './ButtonSegment';
import PrimeSegment from './PrimeSegment';
import factorize from './factorize';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [] };
  }

  addNumber = number => {
    number = parseInt(number);
    this.setState({ numbers: this.state.numbers.concat([number]) });
  };

  render(props) {
    return (
      <div className='ui container text'>
        <HeroBar icon='cogs'>Prime Factorization</HeroBar>
        <ButtonSegment
          labelText='Please type a number to be factorized.'
          onFactorize={this.addNumber}
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
