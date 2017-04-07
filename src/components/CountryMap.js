import React, { Component } from 'react'
import GoogleMapReact  from 'google-map-react'

const K_CIRCLE_SIZE = 30;
const K_STICK_SIZE = 10;
const K_STICK_WIDTH = 3;

const AnyReactComponent = ({ text }) => (
  <div style={{
  position: 'absolute',
  left: 0,
  top: 0,
  width: K_CIRCLE_SIZE,
  height: K_CIRCLE_SIZE,
  border: '3px solid #f44336',
  borderRadius: K_CIRCLE_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: '4em',
  fontWeight: 'bold',
  padding: 0,
  cursor: 'pointer',
  boxShadow: '0 0 0 1px white'     
  }}>
  <div style={{
    position: 'relative',
    left: K_CIRCLE_SIZE,
    letterSpacing: '.05em',
    textShadow: '4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2)'
  }}>
    {text}
  </div>
  </div>
);


class  CountryMap extends Component {

  static defaultProps = {
    center: {lat: 47.023950, lng: 8.211630},
    zoom: 6
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
          lat={47.023950} 
          lng={8.211630} 
          text={origin}
        />
      </GoogleMapReact>

  )
   
}
}

export default CountryMap