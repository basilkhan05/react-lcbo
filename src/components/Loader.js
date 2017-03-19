import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import logo from '../../public/logo.png'

const LoaderScreen = () => (
  <Segment className="page-loader">
	  <Dimmer active inverted>
	    <Loader indeterminate={true} size='massive'>
	      <Image className="ui centered image" src={logo} />
	      <h1>Hold on ... </h1>
	    </Loader>
	  </Dimmer>
	</Segment>
)

export default LoaderScreen