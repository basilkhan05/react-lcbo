import React from 'react';
import { callLCBOApi } from '../utilities/utils'




class Home extends React.Component {
    constructor(props){
    super(props);

    this.state = {
      productsData: []
    }
  }

  // get Product Data 
  getHomeData = () => {
    callLCBOApi('/products', this);
  }

  componentDidMount(){
    this.getHomeData();
  }

  render() {
    return (

      <div>
      
        <div>

        <h1> Home Page </h1>

        </div>

      </div>
    );
  }
}

export default Home;