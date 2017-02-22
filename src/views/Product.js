import React from 'react';
import { callLCBOApi } from '../utilities/utils'
import { Grid, Button } from 'semantic-ui-react'
// import LoaderScreen from '../components/Loader'
import './styles/Product.css'

class Product extends React.Component {
    constructor(props){
    super(props);

    this.state = {
      product_id: this.props.params.id,
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
    const productData = this.state.productsData;
    return (
      <div>
      <Grid columns={2} stackable={true}>
        
        <div>{productData.id} </div>
        <div>{productData.name} </div>
        <div>{productData.tags} </div>
        <div>{productData.primary_category} </div>
        <div>{productData.price_per_liter_of_alcohol_in_cents} </div>


      </Grid>
      
      </div>
    );
  }
}

export default Product;