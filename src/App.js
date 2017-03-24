import React, { Component, PropTypes } from 'react';
import MenuHeader from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoaderScreen from './components/Loader';
import MoodSelector from './components/MoodSelector';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

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
state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  render() {
    const { current_$_status, current_mood } = this.props.all_moods 
const { visible } = this.state
  function findMood(mood){
    return mood.action_arg === current_mood
  }
  function findStatus(money_status){
    return money_status.action_arg === current_$_status
  }

   const mood = current_mood ? moods.find(findMood).description : null;
   const status = current_$_status ? money_status.find(findStatus).description : null

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
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='wide' visible={this.props.menu_is_open} icon='labeled' vertical inverted >
            <Menu.Item name='close' onClick={()  => {this.props.dispatch(openMenu(false))}} >
              <Icon name='remove' />
              close
            </Menu.Item>
            <Menu.Item name='status' onClick={()  => {this.props.dispatch(setMoneyStatus())}} >
                <Image src={'http://basilkhan.ca/projects/TipZee/public/'+current_$_status+'.png'}/>
              
              {status}
            </Menu.Item>
            <Menu.Item name='mood' onClick={()  =>  {this.props.dispatch(setMood())}} >
              <Image src={'http://basilkhan.ca/projects/TipZee/public/'+current_mood+'.png'}/>
              {mood}
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
      <MenuHeader dispatch={this.props.dispatch} all_moods={this.props.all_moods} />
      <div className="ui container">
        <div>
          {this.props.children}
        </div>
      </div>
      <Footer />
       </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
     
      
      
      </ReactCSSTransitionGroup>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
