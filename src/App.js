import React, { Component, PropTypes } from 'react';
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <div className="ui container">
      <Header />
        <div>
          {this.props.children}
        </div>
      </div>
     
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
