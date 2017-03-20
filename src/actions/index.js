import R from 'ramda'

const config = require('../../app_config/config');

var myHeaders = new Headers();
myHeaders.append("Authorization", config.access_token);

var myInit = { method: 'GET',
	           headers: myHeaders,
	           mode: 'cors',
	           cache: 'default' 
	       	};

const createQstring = R.compose(
      R.concat('?'),
      R.join('&'),
      R.map(R.join('=')),
      R.toPairs);

export const fetchProducts = (query) => {
  return function(dispatch){
  		dispatch({type: "FETCH_PRODUCTS_PENDING"})
	    fetch(config.lcboapiURL+"/products"+createQstring(query), myInit)
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
	if (lvl === 3) {
		return {type: "SET_MS_TO_LEVEL_3", current_$_status: lvl}
	} else if (lvl === 2){
		return {type: "SET_MS_TO_LEVEL_2", current_$_status: lvl}
	} else if (lvl === 1) {
		return {type: "SET_MS_TO_LEVEL_1", current_$_status: lvl}
	} else {
		return {type: "RESET_MOOD"}
	}
}


export const setMood = (mood) => {
	switch (mood) {
		case 'classy':
			return {type: "SET_MOOD_TO_CLASSY", current_mood: mood}
		case 'kosher':
			return {type: "SET_MOOD_TO_KOSHER", current_mood: mood}
		default:
		return {type: "RESET_MOOD"}
	}
}
