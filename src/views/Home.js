import React from 'react';
import { callLCBOApi } from '../utilities/utils'
import { Grid, Button, Statistic } from 'semantic-ui-react'
import ProductPreviewCard  from '../components/ProductPreviewCard'
// import LoaderScreen from '../components/Loader'
import './styles/Home.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Home extends React.Component {
    constructor(props){
    super(props);

    this.state = {
      productsData: [],
      pager :{
        'current_page_record_count': '',
        'total_record_count': ''
      },
      Loader: false
    }
  }
  // - 'order=alcohol_content.desc,price_in_cents.asc'
  //classy -  'where=is_vqa'
  // get Product Data 
  getHomeData = () => {
    callLCBOApi('/products?'
      // + 'where=is_vqa&'
      // + 'order=price_in_cents.desc'
      , this);
  }

  componentDidMount(){
    this.getHomeData();
  }


  render() {
    const products = (this.state.productsData
                    ? this.state.productsData.map((product, idx) => (
                        <Grid.Column key={'product-' + idx} >
                            <ProductPreviewCard productPreview={product} />
                        </Grid.Column>
                      ))
                    : <h2 className="center">There was problem getting product data... Please check back later</h2>
                  );

    const searchSummary = this.state.pager ? this.state.pager : null; 
    const searchSummaryComponent = (
          <Statistic.Group widths='two'>
            <Statistic>
              <Statistic.Value>{searchSummary.current_page_record_count}</Statistic.Value>
              <Statistic.Label>Products on this page</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{searchSummary.total_record_count}</Statistic.Value>
              <Statistic.Label>Total Products Found</Statistic.Label>
            </Statistic>
          </Statistic.Group>
          );

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
          <Button className={"load-button"} primary fluid>LOAD MORE</Button>
        </ReactCSSTransitionGroup>
    );
  }
}

export default Home;