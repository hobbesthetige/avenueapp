import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppWrapper, GlobalStyle } from './Styled';
import { AppHeader } from './Components/'
import { Hello } from './Hello';
import HelloWorld from './HelloWorld';
// import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <AppWrapper>
        <GlobalStyle/>
        <AppHeader/>
      </AppWrapper>
    );
  }
}

render(<App />, document.getElementById('root'));
