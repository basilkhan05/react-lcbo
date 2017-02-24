import React from 'react';
import { callLCBOApi } from '../utilities/utils'
import { Grid, Button } from 'semantic-ui-react'
import ProductPreviewCard  from '../components/ProductPreviewCard'
// import LoaderScreen from '../components/Loader'
import './styles/Home.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Home extends React.Component {
    constructor(props){
    super(props);

    this.state = {
      productsData: [],
      Loader: false
    }
  }
  // - 'order=alcohol_content.desc,price_in_cents.asc'
  //classy -  'where=is_vqa'
  // get Product Data 
  getHomeData = () => {
    callLCBOApi('/products?'
      + 'per_page=20&' + 'order=alcohol_content.desc,price_in_cents.asc'
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

    return (
      <div>
      
        <ReactCSSTransitionGroup
          transitionName="products"
          transitionAppear={true}>
          <Grid columns={4} stackable={true}>
          {products}
          </Grid>
        </ReactCSSTransitionGroup>

      
      <Button className={"load-button"} primary fluid>LOAD MORE</Button>
      </div>
    );
  }
}

export default Home;