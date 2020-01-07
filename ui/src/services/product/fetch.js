import Axios from 'axios';
import { API_URL } from '../../consts';

export const fetchProducts = () => Axios.get(`${API_URL}/products`)
  .then((response) => response.data);

export const fetchProduct = (productId) => Axios.get(`${API_URL}/products/${productId}`)
  .then((response) => response.data);
