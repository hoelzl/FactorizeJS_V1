import React from 'react';

const HeroBar = props => {
  return (
    <div className='ui segment' style={{ marginTop: '10px' }}>
      <h1 className='ui icon center aligned header'>
        <i
          className={`${props.icon ? props.icon : 'cogs'} icon`}
          aria-hidden='true'
        />
        <div className='content'>{props.children}</div>
      </h1>
    </div>
  );
};

export default HeroBar;
