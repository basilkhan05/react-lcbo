import React, { Component } from 'react';
// import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <div>
      <div className="wrapper">

        <div id="pageContent" className="page-content">
          {this.props.children}
        </div>

      </div>
     

      </div>
    );
  }
}

export default App;
