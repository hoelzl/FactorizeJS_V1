import React from 'react';
import { Container } from 'semantic-ui-react';
import HeroBar from './HeroBar';
import ButtonSegment from './ButtonSegment';
import PrimeSegment from './PrimeSegment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [] };
  }

  addNumber = number => {
    this.setState({ numbers: this.state.numbers.concat([number]) }, () => {
      console.log('Adding number: ', this.state);
    });
  };

  render(props) {
    return (
      <Container text>
        <HeroBar icon='cogs'>Prime Factorization</HeroBar>
        <ButtonSegment
          labelText='Please type a number to be factorized.'
          onFactorize={this.addNumber}
        />
        {this.state.numbers.map((number, index) => (
          <PrimeSegment key={index} number={number} />
        ))}
      </Container>
    );
  }
}

export default App;
