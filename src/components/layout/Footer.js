// import { Link } from 'react-router';
import React, { Component } from 'react'
import { Image, Header, Grid } from 'semantic-ui-react'
import '../styles/Footer.css'
import logo from '../../../public/logo.png'

class Footer extends Component {

  render() {

    return (
    <div className="ui vertical footer segment">

      <div className="ui center aligned container">
        <Grid centered columns={2}>
          <Grid.Column>
            <div className="ui section divider"></div>
            <Header>Built with</Header>
          </Grid.Column>

          <Grid.Row centered columns={4}>
            <Grid.Column>
              <Image src='http://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='http://lcbosavvy.xyz/assets/lcboapi.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
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