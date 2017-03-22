import React, { Component }from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import { setMoneyStatus , setMood } from '../actions'
import { money_status, moods } from '../utilities/moods'



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
  <Modal className='sherry-background' open={!selectorOpen} size={'fullscreen'}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/assets/images/wireframe/image.png' />
      <Modal.Description>
        <Header>Modal Header</Header>
        <p>This is an example of expanded content that will cause the modals dimmer to scroll</p>
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
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
    
  </Modal>
)

}

}

export default MoodSelector
