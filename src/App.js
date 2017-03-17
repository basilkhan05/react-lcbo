import React, { Component, PropTypes } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { connect } from "react-redux"

connect((store) => {
    return {
      products: store.products
    }
  });


class App extends Component {
  render() {
    return (
      <div>
      <div className="ui container">
      <Header />
        <div>
          {this.props.children}
        </div>
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
