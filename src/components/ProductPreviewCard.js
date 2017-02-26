import React from 'react'
import { Link } from 'react-router';
import { Card, Icon, Image } from 'semantic-ui-react'
import noImage from '../../public/no-image.jpeg'
import './styles/ProductPreviewCard.css'

class ProductPreviewCard extends React.Component {

  render() {

    const { productPreview } = this.props;

    return (
  <Link to={`/product/${productPreview.id}`}>

  <Card className="product-preview-card">
    <Image src={productPreview.image_thumb_url ? productPreview.image_thumb_url : noImage} />
    <Card.Content>
      <Card.Header>{productPreview.name}</Card.Header>
      <Card.Meta>
      {
        (productPreview.price_in_cents 
          ? `${productPreview.price_in_cents / 100}`
          : null)
      }
      </Card.Meta>
      <Card.Description>{productPreview.producer_name}</Card.Description>
      <Card.Description><strong>
       <Icon name="fire" />
      {
        (productPreview.alcohol_content 
          ? `${productPreview.alcohol_content / 100}%`
          : null)
      }
      </strong></Card.Description>
    </Card.Content>
    <Card.Content extra>
      
        <Icon name='bar' />
        {productPreview.primary_category}
      
    </Card.Content>
  </Card>

  </Link>
  );
  }
}

export default ProductPreviewCard;