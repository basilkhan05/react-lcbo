import React from 'react'
import { connect } from "react-redux"
import { Grid, Button, Statistic, Icon } from 'semantic-ui-react'
import { fetchProducts, loadMoreProducts } from '../actions'

import ProductPreviewCard  from '../components/ProductPreviewCard'
// import LoaderScreen from '../components/Loader'
import './styles/Home.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'



const mapStateToProps = (store) => {
  return {
     products: store.products.products, 
     pager: store.products.pager,
     fetching: store.products.fetching
  }
}


class Home extends React.Component {

  componentDidMount(){
    if (this.props.products.length < 1) {
      this.props.dispatch(fetchProducts());
    } 
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

            <Button 
                onClick={
                  ()  => 
                  {this.props.dispatch(loadMoreProducts(searchSummary ? searchSummary.next_page : null)) }
                } 
                className="load-button" 
                primary 
                fluid
                disabled={this.props.fetching ? true : false }
                >
                {this.props.fetching 
                  ? <span> <Icon loading name='spinner' /> FETCHING BOOZE ...  </span>
                  : <span> GIMME MORE </span>
                }
            </Button>
          
        </ReactCSSTransitionGroup>
    );
  }
}

export default connect(mapStateToProps)(Home);