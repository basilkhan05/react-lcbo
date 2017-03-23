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

const image = mood ? 'http://basilkhan.ca/projects/TipZee/public/'+mood+'.png' :
			  (status ? 'http://basilkhan.ca/projects/TipZee/public/'+status+'.png' : null)

const description = mood ? moods.find(findMood).description : (money_status ? money_status.find(findStatus).description : null)
const long_description = mood ? moods.find(findMood).long_description : (money_status ? money_status.find(findStatus).long_description : null)
  return(
    <Card style={{margin: '0 auto', background: 'none'}}
      onClick={()  => {mood ? dispatch(setMood(mood)) : dispatch(setMoneyStatus(status)) }}
      image={image}
      header={description}
      description={long_description}
    />
  )
   
}
}

export default MoodCard