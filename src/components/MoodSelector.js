import React, { Component }from 'react'
import { Button, Header, Icon, Image, Modal, Grid } from 'semantic-ui-react'
import { setMoneyStatus , setMood } from '../actions'
import { money_status, moods } from '../utilities/moods'
import './styles/MoodSelector.css'
import MoodCard from './MoodCard'

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

const d = new Date();
const dayoftheweek = new Array(7);
dayoftheweek[0] =  "Sunday";
dayoftheweek[1] = "Monday";
dayoftheweek[2] = "Tuesday";
dayoftheweek[3] = "Wednesday";
dayoftheweek[4] = "Thursday";
dayoftheweek[5] = "Friday";
dayoftheweek[6] = "Saturday";

const n = dayoftheweek[d.getDay()];

const selectorOpen = this.props.all_moods.money_status_is_set && this.props.all_moods.mood_is_set;
 return(
  <Modal  open={!selectorOpen} size={'fullscreen'}>
    <Modal.Header className='sherry-background'>
    <h1 className="center"> Welcome to </h1>
    <Image className="ui centered image" src={logo} /></Modal.Header>
    <Modal.Content image className='sherry-background'>
      <Modal.Description className="center">
        <Header>It is {n}... What occasion are you looking for</Header>
        <Grid columns={3} stackable={true}>
        <MoodCard /><MoodCard /><MoodCard />
        </Grid>
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
