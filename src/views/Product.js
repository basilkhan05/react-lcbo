import React from 'react';
import { callLCBOApi } from '../utilities/utils'
import { Grid, Button } from 'semantic-ui-react'
// import LoaderScreen from '../components/Loader'
import './styles/Product.css'

class Product extends React.Component {
    constructor(props){
    super(props);

    this.state = {
      product_id: this.props.params.GTIN,
      Loader: false,
      productsData: []
    }
  }
  // - 'order=alcohol_content.desc,price_in_cents.asc'
  //classy -  'where=is_vqa'
  // get Product Data 
  getProductData = () => {
    callLCBOApi('/products/'
      + this.state.product_id
      , this);
  }

  componentDidMount(){
    this.getProductData();
  }

  render() {
    return (
      <div>
      <Grid columns={2} stackable={true}>
        
        <div> </div>

      </Grid>
      <Button primary fluid>LOAD MORE</Button>
      </div>
    );
  }
}

export default Product;