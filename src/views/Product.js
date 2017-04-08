import React from 'react';
import { connect } from "react-redux"

import { Grid, Header, Image, Progress, Segment, Divider, Statistic } from 'semantic-ui-react'
import ProductDetailsTable from '../components/ProductDetailsTable'
import CountryMap from '../components/CountryMap'
import InstagramSlider from '../components/InstagramSlider'

import './styles/Product.css'
import noImage from '../../public/no-image.jpeg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { formatCurrency , formatVolume } from '../utilities/utils'

import { fetchProduct } from '../actions'


const mapStateToProps = (store) => {
  return {
     product: store.products.product, 
     product_details: store.products.product_details
  }
}

class Product extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchProduct(this.props.params.id));
  }

  render() {
    const productData = this.props.product;
    const productDetails = this.props.product_details;
    const productPrice = productData.price_in_cents ? '$'+(productData.price_in_cents /100).toFixed(2): 'N/A'; 
    const wasPrice = (productData.regular_price_in_cents > productData.price_in_cents
                      ? ' (Was $' + productData.regular_price_in_cents /100 +')'
                      : null);
    const funkyPricePercent = (Math.log(productData.price_in_cents/100) / Math.log(35000))*100;

    const productInfoData = [
        {
          description: 'LCBO Product Description',
          long_description: 'Description',
          data: productData.description,
          icon: 'browser'
        },
        {
          description: 'Released On',
          long_description: 'Official release date',
          data: productData.released_on,
          icon: 'calendar'
        },
        {
          description: 'Stock Type',
          long_description: 'Either “LCBO” or “VINTAGES”',
          data: productData.stock_type,
          icon: 'shopping bag'
        },
        {
          description: 'Serving Suggestion',
          long_description: 'LCBO serving suggestion',
          data: productData.serving_suggestion,
          icon: 'comment'
        },
        {
          description: 'Sugar (g/L)',
          long_description: 'The amount of sugar that is contained in the product in grams per liter.',
          data: productData.sugar_in_grams_per_liter,
          icon: 'percent'
        },
        {
          description: 'Sugar Content',
          long_description: 'The product’s sweetness descriptor, is usually a designation such as extra-dry (XD), medium sweet (MS), etc.',
          data: productData.sugar_content,
          icon: 'list ul'
        },
        {
          description: 'Tasting Note',
          long_description: 'Professional tasting note',
          data: productData.tasting_note,
          icon: 'comments'
        }
    ]

    const productPromotionalData = [
        {
          description: 'Bonus Reward Miles',
          long_description: 'Number of bonus air miles',
          data: productData.bonus_reward_miles,
          icon: null
        },
        {
          description: 'Bonus Reward Miles Ends On',
          long_description: 'When bonus air miles are no longer valid',
          data: productData.bonus_reward_miles_ends_on,
          icon: null
        },
        {
          description: 'Has Bonus Reward Miles',
          long_description: 'Yes if the product has bonus air miles',
          data: productData.has_bonus_reward_miles,
          icon: null
        },
        {
          description: 'Has Limited Time Offer',
          long_description: 'Yes if the product is on sale',
          data: productData.has_limited_time_offer,
          icon: null
        },
        {
          description: 'Has Value Added Promotion',
          long_description: 'Contents of the value added promotion offer if available',
          data: productData.has_value_added_promotion,
          icon: null
        }
    ]
    
    const productIndicatorData = [
        {
          description: 'Product is Discontinued',
          long_description: 'Yes if the product has been marked as discontinued by the LCBO',
          data: productData.bonus_reward_miles_ends_on,
          icon: null
        },
        {
          description: 'Product is Kosher',
          long_description: 'Yes if the product is designated as Kosher.',
          data: productData.has_bonus_reward_miles,
          icon: null
        },
        {
          description: 'Seasonal Product',
          long_description: 'Yes if the product is designated as seasonal',
          data: productData.has_limited_time_offer,
          icon: null
        },
        {
          description: 'VQA Product',
          long_description: 'Yes if the product is designated as VQA',
          data: productData.has_value_added_promotion,
          icon: null
        },
        {
          description: 'OCB Product',
          long_description: 'Yes if the product is produced by a member of the Ontario Craft Brewers',
          data: productData.has_value_added_promotion,
          icon: null
        }
    ]

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
      </Grid>

      <Grid columns={1} stackable={true}>
        <Grid.Column>

        </Grid.Column>
      </Grid>

      <Divider />

      <Grid columns={1} stackable={true}>
        <Grid.Column>
          <Segment>
          <Header as='h1'>Inventory across all LCBO stores</Header>
          <Grid columns={3} stackable={true} className="inventory-stats">
            <Grid.Column>
              <Statistic value={productData.inventory_count} label='Total units' />
            </Grid.Column>

            <Grid.Column>
             <Statistic value={formatCurrency(productData.inventory_price_in_cents)} label='Total retail price of all units' />
            </Grid.Column>

            <Grid.Column>
             <Statistic value={formatVolume(productData.inventory_volume_in_milliliters)} label='Total volume of all units' />
            </Grid.Column>
          </Grid>
          </Segment>
        </Grid.Column>
      </Grid>

      <Grid columns={1} stackable={true}>
      <Header as='h1'>Top Instagram Posts</Header>
        <Grid.Column>
          <InstagramSlider dispatch={this.props.dispatch} />
        </Grid.Column>
      </Grid>

      <Grid columns={1} stackable={true}>
          <Grid.Column>
          <Segment>
            <Header as='h2'>Product Information for {productData.name}</Header>
            <ProductDetailsTable productInfoData={productInfoData} />
          </Segment>
          </Grid.Column>
      </Grid>

      <Grid columns={1} stackable={true}>
      <Header as='h1'>Region of Origin</Header>
        <Grid.Column style={{width: '100%', height: '400px'}}>
        {productData.origin ?
          <CountryMap countryOfOrigin={productData.origin} dispatch={this.props.dispatch} originData={productDetails.origin} />
          : null
        }
        </Grid.Column>
      </Grid>

      <Grid columns={1} stackable={true}>
        <Grid.Column>
          <Segment>
          <Header as='h1'>Product Categorization</Header>
          <Grid columns={3} stackable={true} className="category-stats">
            <Grid.Column>
              <Statistic value={productData.primary_category ? productData.primary_category : 'N/A'} label='Primary Category' size='mini'/>
            </Grid.Column>

            <Grid.Column>
             <Statistic value={productData.secondary_category ? productData.secondary_category : 'N/A'} label='Secondary Category' size='mini'/>
            </Grid.Column>

            <Grid.Column>
             <Statistic value={productData.tertiary_category ? productData.tertiary_category  : 'N/A'} label='Tertiary Category' size='mini'/>
            </Grid.Column>
          </Grid>
          </Segment>
        </Grid.Column>
      </Grid>

      <Grid columns={2} stackable={true}>
          <Grid.Column>
          <Segment>
            <Header as='h2'>Promotional Product Information for {productData.name}</Header>
            <ProductDetailsTable productInfoData={productPromotionalData} />
          </Segment>
          </Grid.Column>

          <Grid.Column>
          <Segment>
            <Header as='h2'>Product Indicators for {productData.name}</Header>
            <ProductDetailsTable productInfoData={productIndicatorData} />
          </Segment>
          </Grid.Column>
      </Grid>

      </ReactCSSTransitionGroup>
    );
  }
}

export default connect(mapStateToProps)(Product);