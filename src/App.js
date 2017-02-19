import React, { Component, PropTypes } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <h1>HELLO REACT</h1>
      <Header />
        <div id="pageContent" className="page-content">
          {this.props.children}
        </div>
       <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
