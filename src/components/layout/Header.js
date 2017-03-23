import { Link } from 'react-router'
import React, { Component } from 'react'
import { Input, Menu, Segment, Image, Button } from 'semantic-ui-react'
import '../styles/Header.css'
import logo from '../../../public/logo.png'
import { setMoneyStatus, setMood } from '../../actions'

import { money_status, moods } from '../../utilities/moods'

class Header extends Component {


  componentDidUpdate(){
    
  }
  
  render() {
  const { current_$_status, current_mood } = this.props.all_moods 

  function findMood(mood){
    return mood.action_arg === current_mood
  }
  function findStatus(money_status){
    return money_status.action_arg === current_$_status
  }

   const mood = current_mood ? moods.find(findMood).description : null;
   const status = current_$_status ? money_status.find(findStatus).description : null

    return (
      <div>

        <Menu pointing secondary>
        <Segment className="logo-section">
           <Link to={`/`}>
           <Image className="logo-image" src={logo} />
           </Link>
        </Segment>
        <Menu.Menu>
            <Menu.Item>
              <Button
              onClick={
                  ()  => 
                  {this.props.dispatch(setMoneyStatus()) }
                } 
                icon='remove'
                label={{ as: 'a', basic: true, content: status }}

                labelPosition='left'
              />
              <Button
              onClick={
                  ()  => 
                  {this.props.dispatch(setMood()) }
                } 
                icon='remove'
                label={{ as: 'a', basic: true, content: mood }}
                labelPosition='left'
              />
            </Menu.Item>
          </Menu.Menu>
		      <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search ...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

       
      </div>



    )
  }
}

export default Header;