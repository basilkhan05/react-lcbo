// import { Link } from 'react-router';
import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
       <Segment>
          
        </Segment>

        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick} />
          <Menu.Item name='favorites' active={activeItem === 'favorites'} onClick={this.handleItemClick} />
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