import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps';





class  CountryMap extends Component {

render() {

const SimpleMapExampleGoogleMap =  withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
));

const { countryOfOrigin } = this.props;

  return(
   <SimpleMapExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
  )
   
}
}

export default CountryMap