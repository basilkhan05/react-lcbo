import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



class ProductPreviewCard extends React.Component {

  render() {

    const { productPreview } = this.props;

    return (

  <Card>
    <Image src={productPreview.image_thumb_url} />
    <Card.Content>
      <Card.Header>{productPreview.name}</Card.Header>
      <Card.Meta>
      {
        (productPreview.price_in_cents 
          ? '$'+ productPreview.price_in_cents / 100 
          : null)
      }
      </Card.Meta>
      <Card.Description>{productPreview.producer_name}</Card.Description>
      <Card.Description><strong>{productPreview.alcohol_content / 100}%</strong></Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='star' />
        {productPreview.primary_category}
      </a>
    </Card.Content>
  </Card>
  );
  }
}

export default ProductPreviewCard;