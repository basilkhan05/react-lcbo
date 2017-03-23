// import { Link } from 'react-router';
import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import '../styles/Footer.css'
import logo from '../../../public/logo.png'

class Footer extends Component {

  render() {

    return (
      <div className="ui vertical footer segment">
      <div className="ui center aligned container">
        <div className="ui stackable divided grid">
          <div className="three wide column">
            <h4 className="ui header">Group 1</h4>
            <div className="ui link list">
              <a href="#" className="item">Link One</a>
              <a href="#" className="item">Link Two</a>
              <a href="#" className="item">Link Three</a>
              <a href="#" className="item">Link Four</a>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui header">Group 2</h4>
            <div className="ui link list">
              <a href="#" className="item">Link One</a>
              <a href="#" className="item">Link Two</a>
              <a href="#" className="item">Link Three</a>
              <a href="#" className="item">Link Four</a>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui header">Group 3</h4>
            <div className="ui link list">
              <a href="#" className="item">Link One</a>
              <a href="#" className="item">Link Two</a>
              <a href="#" className="item">Link Three</a>
              <a href="#" className="item">Link Four</a>
            </div>
          </div>
          <div className="seven wide column">
            <h4 className="ui header">Footer Header</h4>
            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
          </div>
        </div>
        <div className="ui section divider"></div>
        <Image className="ui centered image" src={logo} />
        <div className="ui horizontal small divided link list">
          <a className="item" target="_blank" href="http://basilkhan.ca">Basil Khan</a>
          <a className="item" target="_blank" href="https://github.com/basilkhan05">Github</a>
        </div>
      </div>
    </div>
    )
  }
}

export default Footer;