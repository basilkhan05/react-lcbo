import React from 'react'
import { connect } from "react-redux"
import { callLCBOApi } from '../utilities/utils'
import { Grid, Button, Statistic, Icon } from 'semantic-ui-react'
import { fetchProducts, loadMoreProducts } from '../actions'

import ProductPreviewCard  from '../components/ProductPreviewCard'
// import LoaderScreen from '../components/Loader'
import './styles/Home.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import R from 'ramda'


const mapStateToProps = (store) => {
  return {
     products: store.products.products, 
     pager: store.products.pager,
     fetching: store.products.fetching
  }
}


class Home extends React.Component {
    constructor(props){
    super(props);

    this.state = {
      productsData: [],
      productQuery: {
        'order': 'price_in_cents.desc',
        'currentPage': 1
      },
      pager :{
        'current_page_record_count': 0,
        'total_record_count': 0
      },
      Loader: false
    }
  }
  // - 'order=alcohol_content.desc,price_in_cents.asc'
  //classy -  'where=is_vqa'
  // get Product Data 
  getHomeData = () => {
    const productQuery = this.state.productQuery ;
    const createQstring = R.compose(
      R.concat('?'),
      R.join('&'),
      R.map(R.join('=')),
      R.toPairs);
    const result = createQstring(productQuery)
    callLCBOApi('/products'
      // + 'where=is_vqa&'
      + result
      , this);
  }

  componentDidMount(){
    this.props.products.length > 0 ? null : this.props.dispatch(fetchProducts());
  }

  loadProducts = () => {
  const productQuery = this.state.productQuery ;
  callLCBOApi('/products?'
  + 'order=' + productQuery['order']
  + '&page=' + productQuery['currentPage']
  , this);

}


  render() {
    // console.log('store', this.props.products);
    const products = (this.props.products
                    ? this.props.products.map((product, idx) => (
                        <Grid.Column key={'product-' + idx} >
                            <ProductPreviewCard productPreview={product} />
                        </Grid.Column>
                      ))
                    : <h2 className="center">There was problem getting product data... Please check back later</h2>
                  );
    

    const searchSummary = this.props.pager; 
    const searchSummaryComponent = 
    searchSummary ?
        (
          <Statistic.Group widths='two'>
            <Statistic>
              <Statistic.Value>{this.props.products.length}</Statistic.Value>
              <Statistic.Label>Products on this page</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{searchSummary.total_record_count}</Statistic.Value>
              <Statistic.Label>Total Products Found</Statistic.Label>
            </Statistic>
          </Statistic.Group>
          )
      : null ;


    return (
        <ReactCSSTransitionGroup
          transitionName="products"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false}>
          {searchSummaryComponent}
          <Grid columns={4} stackable={true}>
          {products}
          </Grid>
          {this.props.fetching
            ?
            <Button className="load-button" primary fluid disabled>
                <Icon loading name='spinner' /> FETCHING BOOZE ...
            </Button>
              :
            <Button 
                onClick={
                  ()  => 
                  {this.props.dispatch(loadMoreProducts(searchSummary ? searchSummary.next_page : null)) }
                } 
                className="load-button" 
                primary 
                fluid>
                GIMME MORE
            </Button>
          }
        </ReactCSSTransitionGroup>
    );
  }
}

export default connect(mapStateToProps)(Home);