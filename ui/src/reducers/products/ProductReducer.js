const ProductReducer = (state, action) => {
  const updatedForm = {};
  switch (action.type) {
    case 'SET_PRODUCT':
      return { ...state, product: action.payload, fetchingProduct: false };
    case 'SET_FORM':
      Object.keys(action.payload)
        .forEach((field) => { updatedForm[field] = action.payload[field]; });
      return { ...state, form: updatedForm };
    case 'SET_FORM_VALUE':
      return { ...state, form: { ...state.form, [action.payload.field]: action.payload.value } };
    case 'SET_FETCH_PRODUCT':
      return { ...state, fetchingProduct: action.payload };
    case 'SET_FETCH_PRODUCT_ERROR':
      return { ...state, fetchingProduct: false, fetchProductError: true };
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    default:
      throw new Error();
  }
};

export default ProductReducer;
