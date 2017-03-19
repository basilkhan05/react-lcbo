import React, { Component, PropTypes } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoaderScreen from './components/Loader';

import { Segment, Dimmer, Image } from 'semantic-ui-react'
import { connect } from "react-redux"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
      <ReactCSSTransitionGroup
          transitionName="page-loader"
          transitionAppear={false}
          transitionLeaveTimeout={200}
          transitionEnter={false}
          transitionLeave={true}>
      <div>

      {this.props.loading
        ?
        <LoaderScreen />
        : null
      }

      <div className="ui container">
      <Header />
        <div>
          {this.props.children}
        </div>
      </div>
      <Footer />
      </div>
      
      </ReactCSSTransitionGroup>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
