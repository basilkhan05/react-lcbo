import React, { Component, PropTypes } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import { Segment, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from "react-redux"

import './views/styles/App.css'


const mapStateToProps = (store) => {
  return {
     loading: store.products.loading
  }
}
  

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      {!this.props.loading
        ?
      <div>
      <div className="ui container">
      <Header />
        <div>
          {this.props.children}
        </div>
      </div>
      <Footer />
      </div>
      :
      <Segment className="page-loader">
        <Dimmer active>
          <Loader size='massive'>Loading</Loader>
        </Dimmer>
      </Segment>
     }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
