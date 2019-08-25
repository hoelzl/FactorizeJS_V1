import React from 'react';
import { shallow, mount } from 'enzyme';

import HeroBar from './HeroBar';

describe('<HeroBar>', () => {
  it('renders without crashing', () => {
    shallow(<HeroBar />);
  });

  it('has a content div', () => {
    const wrapper = shallow(<HeroBar />);

    expect(wrapper).toContainMatchingElement('.content');
  });

  it('displays its children inside the content div', () => {
    const children = 'THE CHILDREN';
    const wrapper = shallow(<HeroBar>{children}</HeroBar>);

    expect(wrapper.find('.content')).toIncludeText(children);
  });
});
