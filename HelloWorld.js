import React, { Component } from 'react';
import { Title } from './Styled';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <Title>Hello {this.props.name}</Title>
      </div>
    )
  }
}