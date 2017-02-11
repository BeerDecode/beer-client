import React, { Component, PropTypes } from 'react';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {};

  render() {
    return (
      <div className="app">
        <header>
          <h1>BeerDecoded</h1>
        </header>
        {this.props.children}
      </div>
    );
  }

}

