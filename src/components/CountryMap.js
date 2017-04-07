import React, { Component } from 'react'
import GoogleMapReact  from 'google-map-react'


const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: '#6435C9', textShadow: '4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15)',
    height: 40, width: 60, top: -20, left: -30, textAlign: 'center', fontSize: '1.5em'     
  }}>
    {text}
  </div>
);


class  CountryMap extends Component {

  static defaultProps = {
    center: {lat: 51.50, lng: 10.42},
    zoom: 5
  };

render() {

const { countryOfOrigin } = this.props;

const origin = countryOfOrigin ? countryOfOrigin.replace(", Region Not Specified", "") : null ;

  return(
      
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent 
          lat={51.504258} 
          lng={10.4266633} 
          text={origin}
        />
      </GoogleMapReact>

  )
   
}
}

export default CountryMap