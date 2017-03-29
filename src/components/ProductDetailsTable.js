import React from 'react'
import { Header, Icon, Table } from 'semantic-ui-react'



class ProductDetailsTable extends React.Component {


  render() {
  const { productInfoData } = this.props
  return (
    <Table basic='very' celled collapsing>

      <Table.Body>
      	{productInfoData.map((data, idx) => (
      	data.data ?
      	<Table.Row>
          <Table.Cell>
            <Header as='h4' image>
              <Icon name={data.icon} />
              <Header.Content>
                {data.description}
                <Header.Subheader>{data.long_description}</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            {data.data}
          </Table.Cell>
        </Table.Row>
        : null

      	))
        
        }

      </Table.Body>
    </Table>
  )
}
}

export default ProductDetailsTable