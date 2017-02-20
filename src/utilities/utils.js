const config = require('../../config/config');

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
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
        that.setState({
           productsData: data.result,
           Loader: false
        });
      });  
    }  

  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);
    that.setState({productsData:null});
    alert(err);  
  });
}

const stitchLookup = {
  HS: 'Hidden Stitch',
  ST: 'Sew Through',
  TS: 'Top Stitch'
};