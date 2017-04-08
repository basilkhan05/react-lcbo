import R from 'ramda'

const config = require('../../app_config/config');

var myHeaders = new Headers();
myHeaders.append("Authorization", config.access_token);

var myInit = { method: 'GET',
	           headers: myHeaders,
	           mode: 'cors',
	           cache: 'default' 
	       	};

var instagramHeader = new Headers();
instagramHeader.append("Content-Type", "application/json");
// va = { method: 'GET',
// 			   headers: instagramHeader,
// 	           mode: 'cors'
// 	       	};


const createQstring = R.compose(
      R.concat('?'),
      R.join('&'),
      R.map(R.join('=')),
      R.toPairs);

export const fetchProducts = (query) => {
  return function(dispatch){
  		dispatch({type: "FETCH_PRODUCTS_PENDING"})
	    fetch(config.lcboapiURL+"/products"+createQstring(query) , myInit)
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

export const fetchOrigin = (origin) => {
  return function(dispatch){
  		dispatch({type: "FETCH_ORIGIN_PENDING"})
	    fetch(config.googleMapsApi+origin)
	    .then((response) => {
	    	response.json().then(function(data) {
	    	dispatch({type: "FETCH_ORIGIN_FULFILLED", payload: data}) 
	    	})
	    })  
	  .catch(function(err) {  
	    dispatch({type: "FETCH_ORIGIN_REJECTED", payload: err}) 
	  });
  }
}

export const fetchInstagrams = () => {
  return function(dispatch){
  		dispatch({type: "FETCH_INSTAGRAM_PENDING"})
	    fetch("http://basilkhan.ca/projects/instagram/instagram.php")
	    .then((response) => {
	    	response.json().then(function(data) {
	    	dispatch({type: "FETCH_INSTAGRAM_FULFILLED", payload: data}) 
	    	})
	    })  
	  .catch(function(err) {  
	    dispatch({type: "FETCH_INSTAGRAM_REJECTED", payload: err}) 
	  });
  }
}

export const loadMoreProducts = (query, page) => {
	console.log(query)
  return function(dispatch){
  		dispatch({type: "LOAD_MORE_PRODUCTS_PENDING"})
	    fetch(config.lcboapiURL+"/products"+createQstring(query)+"&page="+page ,myInit)
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

export const setMoneyStatus = (lvl) => {
	if (lvl) {
		return {type: "SET_MS", current_$_status: lvl}
	} else {
		return {type: "RESET_MS"}
	}
}


export const setMood = (mood) => {
	if (mood) {
		return {type: "SET_MOOD", current_mood: mood}
	} else {
		return {type: "RESET_MOOD"}
	}
}

export const openMenu = (open) => {
	return {type: "TOGGLE_MENU", menu_is_open: open}
}
