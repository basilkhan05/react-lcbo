import React, { Component } from 'react'
import { Grid, Segment, Card, Icon } from 'semantic-ui-react'
import { setMoneyStatus , setMood } from '../actions'


class  MoodCard extends Component {
render() {

const { mood, status, dispatch } = this.props;
  return(
    <Card style={{margin: '0 auto'}}
      onClick={()  => {mood ? this.props.dispatch(setMood(mood)) : dispatch(setMoneyStatus(status)) }}
      image='http://cdn.pymnts.com/wp-content/uploads/2016/03/Square-logo.png'
      header={mood ? mood : status}
      description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    />
  )
   
}
}

export default MoodCard