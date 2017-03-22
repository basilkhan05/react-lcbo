import React, { Component }from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import { setMoneyStatus , setMood } from '../actions'
import { money_status, moods } from '../utilities/moods'
import './styles/MoodSelector.css'

import logo from '../../public/logo.png'


class  MoodSelector extends Component {

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

const selectorOpen = this.props.all_moods.money_status_is_set && this.props.all_moods.mood_is_set;
 return(
  <Modal  open={!selectorOpen} size={'fullscreen'}>
    <Modal.Header className='sherry-background'>
    <h1 className="center"> Welcome to </h1>
    <Image className="ui centered image" src={logo} /></Modal.Header>
    <Modal.Content image className='sherry-background'>
      <Modal.Description className="center">
        <Header className="center">Modal Header... What occasion are you looking for</Header>
        {this.props.all_moods.mood_is_set || !this.props.all_moods.money_status_is_set ? null 
        : 

        
          <div className="selector-container">
            {MoodComponent}
          </div>
        

      }

      {this.props.all_moods.money_status_is_set ? null : 
       
          <div className="selector-container">
            {StatusComponent}
          </div>
       
      }
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

}

}

export default MoodSelector
