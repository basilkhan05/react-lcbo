import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal, Grid } from 'semantic-ui-react'
import { money_status, moods } from '../utilities/moods'
import './styles/MoodSelector.css'
import MoodCard from './MoodCard'

import logo from '../../public/logo.png'


class  MoodSelector extends Component {

render() {

const StatusComponent =  money_status.map((status, idx) => (
          <Grid.Column key={idx}>
            	<MoodCard status={status.action_arg} dispatch={this.props.dispatch} />
          </Grid.Column>
          ));
const MoodComponent =  moods.map((mood, idx) => (
			<Grid.Column key={idx}>
          		<MoodCard mood={mood.action_arg} dispatch={this.props.dispatch} />
          	</Grid.Column>
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
    <Image className="ui centered image mood-selector" src={logo} /></Modal.Header>
    <Modal.Content image className='sherry-background'>
      <Modal.Description className="center">
        <Header>It is {n}... Have your pick</Header>
        {this.props.all_moods.mood_is_set || !this.props.all_moods.money_status_is_set ? null 
        : 
			<Grid columns={3} stackable={true}>
					{MoodComponent}
			</Grid>
      	}
        


      {this.props.all_moods.money_status_is_set ? null : 
        <Grid columns={3} stackable={true}>
        {StatusComponent}
        </Grid>

       
      }
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

}

}

export default MoodSelector
