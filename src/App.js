import React, { Component, PropTypes } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoaderScreen from './components/Loader';
import MoodSelector from './components/MoodSelector';

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

    return (
      <ReactCSSTransitionGroup
          transitionName="page-loader"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={200}
          transitionEnter={false}
          transitionLeave={true}>
      <div>

      {this.props.loading ? 
        <LoaderScreen /> 
        : null}

      
      <MoodSelector all_moods={this.props.all_moods} dispatch={this.props.dispatch} />       

      

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
