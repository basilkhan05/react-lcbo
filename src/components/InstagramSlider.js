import React from 'react';
import Slider from 'react-slick';
import { fetchInstagrams } from '../actions'


class InstagramSlider extends React.Component {

	componentDidMount(){
	    this.props.dispatch(fetchInstagrams());
	  }

  render () {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      arrows: true,
      responsive: [ 
      	  { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1 } }, 
	      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } }, 
	      { breakpoint: 2000, settings: { slidesToShow: 3, slidesToScroll: 3 } }
      ]
    }
    return (
      <Slider {...settings}>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>
        <div><img src='http://placekitten.com/g/400/200' alt='hello world' /></div>

      </Slider>
    );
  }
}


export default InstagramSlider