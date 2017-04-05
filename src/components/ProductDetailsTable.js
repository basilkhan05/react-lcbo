import React from 'react'
import { Header, Icon, Table } from 'semantic-ui-react'

class ProductDetailsTable extends React.Component {

  render() {
  const { productInfoData } = this.props
  return (
    <Table basic='very' celled collapsing>

      <Table.Body>
      	{productInfoData.map((data, idx) => (
      	data.data !== null ?
      	<Table.Row key={idx}>
          <Table.Cell>
            <Header as='h4' image>
              <Icon name={data.icon ? data.icon : null} />
              <Header.Content>
                {data.description ? data.description : null}
                <Header.Subheader>{data.long_description ? data.long_description : null}</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>
            <div>
              {data.data === true ? 'Yes' : null}
              {data.data === false ? 'No' : null}
              {data.data !== 0 ? data.data : null}
            </div>
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