import React, { Component, PropTypes } from 'react';
import MenuHeader from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoaderScreen from './components/Loader';
import MoodSelector from './components/MoodSelector';
import { Sidebar, Segment, Menu, Image, Icon, Button } from 'semantic-ui-react'

import { connect } from "react-redux"
import { setMoneyStatus, setMood, openMenu } from './actions'
import { money_status, moods } from './utilities/moods'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './views/styles/App.css'


const mapStateToProps = (store) => {
  return {
     loading: store.products.loading,
     mood_is_set: store.moods.mood_is_set,
     money_status_is_set: store.moods.money_status_is_set,
     all_moods: store.moods,
     menu_is_open: store.products.menu_is_open
  }
}
  

class App extends Component {
  render() {
    const { current_$_status, current_mood } = this.props.all_moods 
    const { all_moods, menu_is_open, dispatch, loading } = this.props
    function findMood(mood){
      return mood.action_arg === current_mood
    }
    function findStatus(money_status){
      return money_status.action_arg === current_$_status
    }

   const mood = current_mood ? moods.find(findMood).description : null;
   const status = current_$_status ? money_status.find(findStatus).description : null
   const mood_image = current_mood ? 'http://basilkhan.ca/projects/TipZee/public/'+current_mood+'.png' : null;
   const status_image = current_$_status ? 'http://basilkhan.ca/projects/TipZee/public/'+current_$_status+'.png'  : null

    return (
      <ReactCSSTransitionGroup
          transitionName="page-loader"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={200}
          transitionEnter={false}
          transitionLeave={true}
          onClick={menu_is_open ? ()  => {dispatch(openMenu(false))} : null} >
        {loading ? 
        <LoaderScreen /> 
        : null}

      
        <MoodSelector all_moods={all_moods} dispatch={dispatch} />
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='wide' visible={menu_is_open} icon='labeled' vertical inverted >
            <Menu.Item name='close' onClick={()  => {dispatch(openMenu(false))}} >
              <Icon name='remove' />
              close
            </Menu.Item>
            <Menu.Item name='status' onClick={()  => {dispatch(setMoneyStatus())}} >
              <Image className="menu-mood-image" src={status_image}/>
              <h2>{status}</h2>
            </Menu.Item>
            <Menu.Item name='mood' onClick={()  =>  {dispatch(setMood())}} >
              <Image className="menu-mood-image" src={mood_image}/>
              <h2>{mood}</h2>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
          <MenuHeader dispatch={dispatch} all_moods={all_moods} />
          <div className="ui container">
            <div>
              {this.props.children}
            </div>
          </div>
          <Footer />
          </Sidebar.Pusher>
        </Sidebar.Pushable>

          <div className="floating-icon">
           <Button circular icon='chevron up' onClick={() => window.scrollTo(0, 0)} />
          </div>
      </ReactCSSTransitionGroup>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
