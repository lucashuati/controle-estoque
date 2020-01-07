import Axios from 'axios';
import { API_URL } from '../../consts';

const updateProduct = (productId, data) => Axios.patch(`${API_URL}/products/${productId}`, data)
  .then((response) => response.data);

export default updateProduct;
