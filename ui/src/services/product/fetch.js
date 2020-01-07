import Axios from 'axios';
import { API_URL } from '../../consts';

const fetchProducts = () => Axios.get(`${API_URL}/products`)
  .then((response) => response.data);

export default fetchProducts;
