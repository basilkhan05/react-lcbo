import React from 'react';
import { connect } from "react-redux"

import { callLCBOApi } from '../utilities/utils'
import { Grid, Header, Image, Progress, Segment, Divider} from 'semantic-ui-react'

import './styles/Product.css'
import noImage from '../../public/no-image.jpeg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { fetchProduct } from '../actions'


const mapStateToProps = (store) => {
  return {
     product: store.products.product, 
  }
}

class Product extends React.Component {
    constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.props.dispatch(fetchProduct(this.props.params.id));
  }

  render() {
    const productData = this.props.product;
    const productPrice = productData.price_in_cents ? '$'+(productData.price_in_cents /100).toFixed(2): 'N/A'; 
    const wasPrice = (productData.regular_price_in_cents > productData.price_in_cents
                      ? ' (Was $' + productData.regular_price_in_cents /100 +')'
                      : null);
    const funkyPricePercent = (Math.log(productData.price_in_cents/100) / Math.log(35000))*100;

    return (      
    <ReactCSSTransitionGroup
      transitionName="products"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}>

      <Grid columns={2} stackable={true}>
        
        <Grid.Column width={5}>
          <Image className='center' src={productData.image_url ? productData.image_url : noImage} />
        </Grid.Column>

        <Grid.Column width={10}>
          <Header as='h1'>{productData.name}</Header>

          <Segment>

            <Header as='h5'>Product ID# {productData.id}</Header>

            <Header as='h2'>{productPrice} 
             <span className='wasPrice'> {wasPrice}</span>
            </Header>
            <Progress percent={funkyPricePercent} color='red'/>

            <Header as='h3'>Alcohol Content</Header>
            <Progress percent={productData.alcohol_content / 100} color='violet' label />
            
            <Grid columns={3} stackable={true}>

              <Grid.Column width={5} className='center'>
                <Header as='h3'>Package</Header>
                <div>{productData.package}</div>
              </Grid.Column>

              <Grid.Column width={5} className='center'>
                <Header as='h3'>Volume</Header>
                <div>{productData.volume_in_milliliters ? productData.volume_in_milliliters +' ml' : 'N/A'}</div>
              </Grid.Column>

              <Grid.Column width={5} className='center'>
                <Header as='h3'>Category</Header>
                <div>{productData.primary_category}</div>
              </Grid.Column>

            </Grid>

            <Grid columns={3} stackable={true}>

              <Grid.Column width={5} className='center'>
                <Header as='h3'>Produced by</Header>
                <div>{productData.producer_name}</div>
              </Grid.Column>

              <Grid.Column width={5} className='center'>
                <Header as='h3'>Style </Header>
                <div>{productData.style ? productData.style : 'No Style Available' }</div>
              </Grid.Column>

              <Grid.Column width={5} className='center'>
                <Header as='h3'>Stock Type </Header>
                <div>{productData.stock_type}</div>
              </Grid.Column>

            </Grid>

          </Segment>

        </Grid.Column>

        <Grid.Column>

        </Grid.Column>
        

      </Grid>

      <Divider />

      <Grid columns={2} stackable={true}>



      </Grid>

      </ReactCSSTransitionGroup>
    );
  }
}

export default connect(mapStateToProps)(Product);