import React from 'react';
import Slider from 'react-slick';


class InstagramSlider extends React.Component {

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
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>

      </Slider>
    );
  }
}


export default InstagramSlider