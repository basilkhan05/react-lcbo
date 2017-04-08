import React from 'react';
import Slider from 'react-slick';
import { fetchInstagrams } from '../actions'


class InstagramSlider extends React.Component {

	componentDidMount(){
		const hastags = this.props.tags ? this.props.tags.split(" ") : null;
		const hashtag = hastags ? hastags.slice(0,2).join('') : null;
	    this.props.dispatch(fetchInstagrams(hashtag));
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

    const topPosts = (posts.top_posts.map((post, idx) => (
        	<div key={idx+'_top'} className="instagram-image-container">
	        	<a href={"https://www.instagram.com/p/"+post.code} target="_blank">
	        		<img className="instagram-image" src={post.display_src} alt={post.caption} />
	        	</a>
        	</div>
        )))

    const allPosts = (posts.all_posts.map((post, idx) => (
        	<div key={idx+'_all'} className="instagram-image-container">
        		<a href={"https://www.instagram.com/p/"+post.code} target="_blank">
        			<img className="instagram-image" src={post.display_src} alt={post.caption} />
        		</a>
        	</div>
        )))

    return (
   	<span>
    {posts.all_posts.length > 0 ?
      <Slider {...settings}>
      		{topPosts}
	        {allPosts}
      </Slider>
      : <h3> No Social Media Images Found </h3> }
     </span>
    );
  }
}


export default InstagramSlider