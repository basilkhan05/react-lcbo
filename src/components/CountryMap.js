import React, { Component } from 'react'
import GoogleMapReact  from 'google-map-react'

import { fetchOrigin } from '../actions'

const K_CIRCLE_SIZE = 30;

const LocationPointer = ({ text }) => (
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

  componentDidMount(){
    const origin = this.props.countryOfOrigin ? this.props.countryOfOrigin.replace(", Region Not Specified", "") : null ;
    this.props.dispatch(fetchOrigin(origin));
  }

  static defaultProps = {
    zoom: 5
  };

render() {

const { originData } = this.props;

const center = this.props.originData.lat ? {lat: this.props.originData.lat, lng: this.props.originData.lon} : null;

  return(
    <span>
    {center ? 
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={this.props.zoom}
      >
        <LocationPointer 
          lat={originData.lat} 
          lng={originData.lon} 
          text={originData.string}
        />
      </GoogleMapReact>
    : null }
    </span>
  )
   
}
}

export default CountryMap