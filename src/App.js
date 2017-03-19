import React, { Component, PropTypes } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoaderScreen from './components/Loader';
import { Button, Segment } from 'semantic-ui-react'
import { setMoneyStatus , setMood } from './actions'

import { connect } from "react-redux"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './views/styles/App.css'


const mapStateToProps = (store) => {
  return {
     loading: store.products.loading,
     mood_is_set: store.moods.mood_is_set,
     money_status_is_set: store.moods.money_status_is_set
  }
}
  

class App extends Component {

  render() {
    return (
      <ReactCSSTransitionGroup
          transitionName="page-loader"
          transitionAppear={false}
          transitionLeaveTimeout={200}
          transitionEnter={false}
          transitionLeave={true}>
      <div>

      {this.props.loading ? <LoaderScreen /> : null}

      {this.props.mood_is_set ? null 
        : 

        <div className="mood-selector">
          <div className="selector-container">
            <Button inverted color='red' onClick={()  => {this.props.dispatch(setMood('classy')) }}>Classy</Button>
            <Button inverted color='red' onClick={()  => {this.props.dispatch(setMood('kosher')) }}>Kosher</Button>
          </div>
        </div>

      }

      {this.props.money_status_is_set ? null : 
        <div className="money-status-selector">
          <div className="selector-container">
            <Button inverted color='red' onClick={()  => {this.props.dispatch(setMoneyStatus(1)) }}>$</Button>
            <Button inverted color='red' onClick={()  => {this.props.dispatch(setMoneyStatus(2)) }}>$$</Button>
            <Button inverted color='red' onClick={()  => {this.props.dispatch(setMoneyStatus(3)) }}>$$$</Button>
          </div>
        </div>
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
