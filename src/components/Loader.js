import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderScreen = () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>

    <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderScreen