import { Link } from 'react-router'
import React, { Component } from 'react'
import { Input, Menu, Segment, Image, Button, Icon } from 'semantic-ui-react'
import '../styles/Header.css'
import logo from '../../../public/logo.png'
import { setMoneyStatus, setMood, openMenu } from '../../actions'



class MenuHeader extends Component {


  componentDidUpdate(){
    
  }
  
  render() {
  const { current_$_status, current_mood } = this.props.all_moods 

    return (
      <div>
        <Menu widths={3}>
        <Menu.Item name='home' onClick={this.handleItemClick}>
           <Icon name='caret left' size='huge' />
        </Menu.Item>
        <Menu.Item name='messages' onClick={this.handleItemClick} >
          <Segment className="logo-section">
           <Link to={`/`}>
           <Image className="logo-image" src={logo} />
           </Link>
          </Segment>
        </Menu.Item>
        <Menu.Item name='friends' onClick={()  => {this.props.dispatch(openMenu(true)) }}  >
        <Icon name='bars' size='huge' />
        </Menu.Item>
        </Menu>      
      </div>



    )
  }
}

export default MenuHeader;