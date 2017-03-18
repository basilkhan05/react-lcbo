import React, { Component, PropTypes } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import { Segment, Dimmer, Loader } from 'semantic-ui-react'
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
          transitionAppear={true}
          transitionAppearTimeout={200}
          transitionLeaveTimeout={1000}
          transitionEnter={true}
          transitionLeave={true}>
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
            <Loader size='massive'>Getting TipZeeeeeee</Loader>
          </Dimmer>
        </Segment>
      
     }
      </ReactCSSTransitionGroup>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
