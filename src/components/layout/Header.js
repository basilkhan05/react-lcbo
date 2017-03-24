import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'
import { Menu, Segment, Image, Icon } from 'semantic-ui-react'
import '../styles/Header.css'
import logo from '../../../public/logo.png'
import { openMenu } from '../../actions'



class MenuHeader extends Component {


  componentDidUpdate(){
    
  }
  
  render() {
    return (
      <div>
        <Menu widths={3}>
        <Menu.Item name='back' onClick={browserHistory.goBack}>
           <Icon name='caret left' size='huge' />
        </Menu.Item>
        <Menu.Item name='home' onClick={browserHistory.goHome} >
          <Segment className="logo-section">
           <Link to={`/`}>
           <Image className="logo-image" src={logo} />
           </Link>
          </Segment>
        </Menu.Item>
        <Menu.Item name='menu' onClick={()  => {this.props.dispatch(openMenu(true)) }}  >
        <Icon name='bars' size='huge' />
        </Menu.Item>
        </Menu>      
      </div>



    )
  }
}

export default MenuHeader;