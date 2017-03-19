const config = require('../../app_config/config');

var myHeaders = new Headers();
myHeaders.append("Authorization", config.access_token);

var myInit = { method: 'GET',
	           headers: myHeaders,
	           mode: 'cors',
	           cache: 'default' 
	       	};

export const fetchProducts = () => {
  return function(dispatch){
  		dispatch({type: "FETCH_PRODUCTS_PENDING"})
	    fetch(config.lcboapiURL+"/products?order=alcohol_content.desc,price_in_cents.asc" ,myInit)
	    .then((response) => {
	    	response.json().then(function(data) {
	    	dispatch({type: "FETCH_PRODUCTS_FULFILLED", payload: data}) 
	    	})
	    })  
	  .catch(function(err) {  
	    dispatch({type: "FETCH_PRODUCTS_REJECTED", payload: err}) 
	  });
  }
}

export const fetchProduct = (id) => {
  return function(dispatch){
  		dispatch({type: "FETCH_PRODUCT_PENDING"})
	    fetch(config.lcboapiURL+"/products/"+id ,myInit)
	    .then((response) => {
	    	response.json().then(function(data) {
	    	dispatch({type: "FETCH_PRODUCT_FULFILLED", payload: data}) 
	    	})
	    })  
	  .catch(function(err) {  
	    dispatch({type: "FETCH_PRODUCT_REJECTED", payload: err}) 
	  });
  }
}

export const loadMoreProducts = (page) => {
  return function(dispatch){
  		dispatch({type: "LOAD_MORE_PRODUCTS_PENDING"})
	    fetch(config.lcboapiURL+"/products?order=alcohol_content.desc,price_in_cents.asc"+"&page="+page ,myInit)
	    .then((response) => {
	    	response.json().then(function(data) {
	    	dispatch({type: "LOAD_MORE_PRODUCTS_FULFILLED", payload: data}) 
	    	})
	    })  
	  .catch(function(err) {  
	    dispatch({type: "LOAD_MORE_PRODUCTS_REJECTED", payload: err}) 
	  });
  }
 }