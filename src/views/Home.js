import React from 'react';
import { callLCBOApi } from '../utilities/utils'
import { Grid, Segment } from 'semantic-ui-react'
import ProductPreviewCard  from '../components/ProductPreviewCard'

class Home extends React.Component {
    constructor(props){
    super(props);

    this.state = {
      productsData: []
    }
  }

  // get Product Data 
  getHomeData = () => {
    callLCBOApi('/products?'
      + 'order=alcohol_content.desc,price_in_cents.asc'
      , this);
  }

  componentDidMount(){
    this.getHomeData();
  }

  render() {
    return (
      <Grid columns={4} stackable={true}>

        {this.state.productsData.map((product, idx) =>
        <Grid.Column key={'product-' + idx}>
          
            <ProductPreviewCard productPreview={product} />
          
        </Grid.Column>
        )}


      </Grid>
    );
  }
}

export default Home;