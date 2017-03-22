import React, { Component, PropTypes } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoaderScreen from './components/Loader';
import { Button, Segment } from 'semantic-ui-react'
import { setMoneyStatus , setMood } from './actions'
import { money_status, moods } from './utilities/moods'

import { connect } from "react-redux"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './views/styles/App.css'


const mapStateToProps = (store) => {
  return {
     loading: store.products.loading,
     mood_is_set: store.moods.mood_is_set,
     money_status_is_set: store.moods.money_status_is_set,
     all_moods: store.moods
  }
}
  

class App extends Component {

  render() {
    const StatusComponent =  money_status.map((status, idx) => (
              <div key={status.action_arg}>
                <Button inverted color='red'  onClick={()  => {this.props.dispatch(setMoneyStatus(status.action_arg)) }}>{status.description}</Button>
              </div>
              ));
const MoodComponent =  moods.map((mood, idx) => (
              <div key={idx}>
               <Button inverted color='red' onClick={()  => {this.props.dispatch(setMood(mood.action_arg)) }}>{mood.action_arg}</Button>
              </div>
              ));
    return (
      <ReactCSSTransitionGroup
          transitionName="page-loader"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={200}
          transitionEnter={false}
          transitionLeave={true}>
      <div>

      {this.props.loading ? <LoaderScreen /> : null}

      {this.props.mood_is_set ? null 
        : 

        <div className="mood-selector">
          <div className="selector-container">
            {MoodComponent}
          </div>
        </div> 

      }

      {this.props.money_status_is_set ? null : 
        <div className="money-status-selector">
          <div className="selector-container">
            {StatusComponent}
          </div>
        </div>
      }

      <div className="ui container">
      <Header dispatch={this.props.dispatch} all_moods={this.props.all_moods} />
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
