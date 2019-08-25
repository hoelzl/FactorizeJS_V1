import React from 'react';

const formatList = numbers => {
  return numbers.join(', ');
};

const templates = {
  noNumber: _ => `No number was specified.`,
  noPrimes: props => `${props.number} has no prime factors.`,
  prime: props => `${props.number} is prime.`,
  default: props =>
    `${props.number} has prime factors ${formatList(props.primes)}.`
};

const computeTemplateKind = props =>
  !props.number
    ? 'noNumber'
    : props.primes.length === 0
    ? 'noPrimes'
    : props.primes.length === 1
    ? 'prime'
    : 'default';

const PrimeSegment = props => {
  const kind = computeTemplateKind(props);
  const template = templates[kind];
  return <div className='ui segment'>{template(props)}</div>;
};

PrimeSegment.defaultProps = {
  number: 0,
  primes: []
}

export default PrimeSegment;
