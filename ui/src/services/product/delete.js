import Axios from 'axios';
import { API_URL } from '../../consts';

const deleteProduct = (productId) => Axios.delete(`${API_URL}/products/${productId}`)
  .then((response) => response.data);

export default deleteProduct;
