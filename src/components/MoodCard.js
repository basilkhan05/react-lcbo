import React, { Component } from 'react'
import { Grid, Segment, Card, Icon } from 'semantic-ui-react'
import { setMoneyStatus , setMood } from '../actions'
import { money_status, moods } from '../utilities/moods'


class  MoodCard extends Component {
render() {

const { mood, status, dispatch } = this.props;

function findMood(moods){
  return moods.action_arg === mood
}
function findStatus(money_status){
  return money_status.action_arg === status
}
const description = mood ? moods.find(findMood).description : money_status.find(findStatus).description
  return(
    <Card style={{margin: '0 auto', background: 'none'}}
      onClick={()  => {mood ? this.props.dispatch(setMood(mood)) : dispatch(setMoneyStatus(status)) }}
      image='http://cdn.pymnts.com/wp-content/uploads/2016/03/Square-logo.png'
      header={description}
      description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    />
  )
   
}
}

export default MoodCard