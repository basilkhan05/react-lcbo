const config = require('../../app_config/config');

var myHeaders = new Headers();
myHeaders.append("Authorization", config.access_token);

var myInit = { method: 'GET',
           headers: myHeaders,
           mode: 'cors',
           cache: 'default' };

// let nextProductPage = 0

export const fetchProducts = () => {
  return function(dispatch){
  		dispatch({type: "FETCH_PRODUCTS_PENDING"})
	    fetch(config.lcboapiURL+"/products?order=alcohol_content.desc,price_in_cents.asc" ,myInit)
	    .then((response) => {
	    	response.json().then(function(data) {
	    	dispatch({type: "FETCH_PRODUCTS_FULFILLED", payload: data.result}) 
	    	})
	    })  
	  .catch(function(err) {  
	    dispatch({type: "FETCH_PRODUCTS_REJECTED", payload: err}) 
	  });
  }
  // return {
  //   type: 'LOAD_PRODUCTS',
  //   page: nextProductPage++
  // }
}

