import React from 'react';
import { callLCBOApi } from '../utilities/utils'
import { Grid, Header, Image, Progress, Segment} from 'semantic-ui-react'
// import LoaderScreen from '../components/Loader'
import './styles/Product.css'
import noImage from '../../public/no-image.jpeg'

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
      <Grid columns={2} stackable={true}>
        
        <Grid.Column width={5}>
          <Image className='center' src={productData.image_url ? productData.image_url : noImage} />
        </Grid.Column>

        <Grid.Column width={10}>
          <Header as='h1'>{productData.name}</Header>
          <Header as='h5'>Product ID# {productData.id}</Header>

          <Segment>

            <Header as='h2'>Price: {productData.price_in_cents ? '$'+(productData.price_in_cents /100).toFixed(2): 'N/A'} </Header>
            <Progress percent={(Math.log(productData.price_in_cents/100) / Math.log(35000))*100} color='green'/>

            <Header as='h2'>Alcohol Content</Header>
            <Progress percent={productData.alcohol_content / 100} color='violet' label />
            
            <Grid columns={3} stackable={true}>

              <Grid.Column width={5} className='center'>
                <Header as='h3'>Product ID# </Header>
                <div>{productData.id}</div>
              </Grid.Column>

              <Grid.Column width={5} className='center'>
                <Header as='h3'>Product ID# </Header>
                <div>{productData.id}</div>
              </Grid.Column>

              <Grid.Column width={5} className='center'>
                <Header as='h3'>Product ID# </Header>
                <div>{productData.id}</div>
              </Grid.Column>

            </Grid>

            <Grid columns={3} stackable={true}>

              <Grid.Column width={5} className='center'>
                <Header as='h3'>Product ID# </Header>
                <div>{productData.id}</div>
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
    );
  }
}

export default Product;