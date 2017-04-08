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

    const { posts } = this.props;

    const allPosts = (posts.all_posts.map((post, idx) => (
        	<div key={idx} className="instagram-image-container">
        		<img className="instagram-image" src={post.display_src} />
        	</div>
        )))

    return (
   	<span>
    {posts.all_posts.length > 0 ?
      <Slider {...settings}>
	        {allPosts}
      </Slider>
      : null}
     </span>
    );
  }
}


export default InstagramSlider