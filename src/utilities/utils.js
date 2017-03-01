const config = require('../../config/config');

var myHeaders = new Headers();
myHeaders.append("Authorization", config.access_token);

var myInit = { method: 'GET',
           headers: myHeaders,
           mode: 'cors',
           cache: 'default' };

export const callLCBOApi = function(query, that)  {
    fetch(config.lcboapiURL+query ,myInit)
    .then(  
    function(response) {

      that.setState({
           Loader: true
        });
      if (response.status !== 200) {  
        console.log('There was a problem with the fetch. Status Code: ' +  
          response.status);  
        return;  
      }

      // Set State to the Data in the response  
      response.json().then(function(data) {  
        const allProducts = that.state.productsData;
        console.log(data.pager);
        if (data.result.length > 1) {
            that.setState({
              productsData: allProducts.concat(data.result),
              Loader: false,
              productQuery: {
                'order': that.state.productQuery.order,
                'currentPage': parseInt(that.state.productQuery.currentPage) + 1
                }
          });
          } else {
            that.setState({
               productData: data.result,
               Loader: false,
            });

          }

        if (data.pager) {
          that.setState({
              pager : {
                'current_page_record_count': data.pager.current_page_record_count + that.state.pager.current_page_record_count,
                'total_record_count': data.pager.total_record_count
              },
          });
        }        
      });  
    }  

  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);
    that.setState({productsData:null});
    // alert(err);  
  });
}
