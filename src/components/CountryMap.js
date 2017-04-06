import React, { Component } from 'react'
import GoogleMapReact  from 'google-map-react'


const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,    
  }}>
    {text}
  </div>
);


class  CountryMap extends Component {

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

render() {

const { countryOfOrigin } = this.props;

  return(
<GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent 
          lat={59.955413} 
          lng={30.337844} 
          text={countryOfOrigin}
        />
      </GoogleMapReact>

  )
   
}
}

export default CountryMap