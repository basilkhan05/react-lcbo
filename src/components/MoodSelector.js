import React, { Component } from 'react'
import { Image, Modal, Grid } from 'semantic-ui-react'
import { money_status, moods } from '../utilities/moods'
import './styles/MoodSelector.css'
import MoodCard from './MoodCard'
import TimePrompt from './TimePrompt'

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



const selectorOpen = this.props.all_moods.money_status_is_set && this.props.all_moods.mood_is_set;
 return(
  <Modal  open={!selectorOpen} size={'fullscreen'}>
    <Modal.Header className='sherry-background'>
    <Image className="ui centered image mood-selector" src={logo} /></Modal.Header>
    <Modal.Content image className='sherry-background'>
      <Modal.Description className="center">
        <TimePrompt />
        {this.props.all_moods.mood_is_set || !this.props.all_moods.money_status_is_set ? null : 
          <div>
          <h1> What are you in the mood for...? </h1>
      			<Grid columns={3} stackable={true}>

      					{MoodComponent}
      			</Grid>
          </div>
      	}
        


      {this.props.all_moods.money_status_is_set ? null : 
        <div>

          <h1> What is your budget?</h1>
        <Grid columns={3} stackable={true}>
          {StatusComponent}
        </Grid>
        </div>       
      }
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

}

}

export default MoodSelector
