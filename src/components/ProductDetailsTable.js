import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'



class ProductDetailsTable extends React.Component {


  render() {
  const { productData } = this.props
  return (
    <Table basic='very' celled collapsing>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='/assets/images/avatar/small/lena.png' shape='rounded' size='mini' />
              <Header.Content>
                {productData.price_per_liter_in_cents}
                <Header.Subheader>Human Resources</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            22
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='/assets/images/avatar/small/matthew.png' shape='rounded' size='mini' />
              <Header.Content>
                Matthew
                <Header.Subheader>Fabric Design</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            15
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='/assets/images/avatar/small/lindsay.png' shape='rounded' size='mini' />
              <Header.Content>
                Lindsay
                <Header.Subheader>Entertainment</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            12
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='/assets/images/avatar/small/mark.png' shape='rounded' size='mini' />
              <Header.Content>
                Mark
                <Header.Subheader>Executive</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            11
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
}

export default ProductDetailsTable