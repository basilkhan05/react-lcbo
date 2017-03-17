let nextProductPage = 0

export const loadProducts = () => {
	console.log('HELLLOOOO');
  return {
    type: 'LOAD_PRODUCTS',
    page: nextProductPage++
  }
}

