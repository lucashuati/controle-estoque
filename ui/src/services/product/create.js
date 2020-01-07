import Axios from 'axios';
import { API_URL } from '../../consts';

const createProduct = (data) => Axios.post(`${API_URL}/products`, data)
  .then((response) => response.data);

export default createProduct;
