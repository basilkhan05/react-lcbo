let nextProductPage = 0

export const loadProducts = () => {
  return {
    type: 'LOAD_PRODUCTS',
    page: nextProductPage++
  }
}

