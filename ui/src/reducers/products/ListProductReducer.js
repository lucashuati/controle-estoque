const ListProductReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload, fetchingProducts: false };
    case 'SET_FETCHING_PRODUCTS':
        return { ...state, fetchingProducts: action.payload };
    case 'SET_FETCH_PRODUCTS_ERROR':
      return { ...state, fetchingProducts: false, fetchProductsError: true };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
    };
    default:
      throw new Error();
  }
};

export default ListProductReducer;
