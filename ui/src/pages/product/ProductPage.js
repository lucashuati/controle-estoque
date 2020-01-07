import React, { useEffect, useReducer } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import ContainerPage from '../../components/common/Container';
import ProductReducer from '../../reducers/products/ProductReducer';
import { fetchProduct } from '../../services/product/fetch';
import InputText from '../../components/common/InputText';
import Button from '../../components/common/Button';
import updateProduct from '../../services/product/update';
import createProduct from '../../services/product/create';

const ProductPage = ({ match, history }) => {
  const initalState = {
    product: {},
    fetchingProduct: false,
    fetchProductError: false,
    title: '',
    form: {
      name: '',
      quantity: '',
      unit_value: '',
    },
  };
  const [state, dispatch] = useReducer(ProductReducer, initalState);
  const productId = get(match, 'params.id');

  useEffect(() => {
    dispatch({ type: 'SET_FETCH_PRODUCT', payload: true });
    if (productId) {
      dispatch({ type: 'SET_TITLE', payload: 'Editar Produto' });
      const fetchData = async () => {
        try {
          const result = await fetchProduct(productId);
          dispatch({ type: 'SET_PRODUCT', payload: result });
          dispatch({ type: 'SET_FORM', payload: result });
        } catch {
          dispatch({ type: 'SET_FETCH_PRODUCT_ERROR' });
        }
      };
      fetchData();
    } else {
      dispatch({ type: 'SET_TITLE', payload: 'Novo Produto' });
    }
  }, [productId]);

  const handleCreateOrUpdateProduct = async () => {
    try {
      if (productId) {
        await updateProduct(productId, state.form);
      } else {
        await createProduct(state.form);
      }
      toast.success('Produto salvo com sucesso');
      history.push('/');
    } catch {
      toast.error('Ocorreu um erro ao salvar o produto');
    }
  };

  return (
    <ContainerPage title={state.title}>
      <>
        <InputText
          id="product-name"
          label="Nome"
          placeholder="Nome do produto"
          onChange={(evt) => dispatch({ type: 'SET_FORM_VALUE', payload: { field: 'name', value: evt.target.value } })}
          value={get(state.form, 'name')}
        />
        <InputText
          id="product-quantity"
          label="Quantidade"
          type="number"
          col={6}
          placeholder="Unidades do produto"
          onChange={(evt) => dispatch({ type: 'SET_FORM_VALUE', payload: { field: 'quantity', value: evt.target.value } })}
          value={get(state.form, 'quantity')}
        />
        <InputText
          id="product-value"
          label="Valor"
          type="number"
          col={6}
          placeholder="Valor unitário do produto"
          onChange={(evt) => dispatch({ type: 'SET_FORM_VALUE', payload: { field: 'unit_value', value: evt.target.value } })}
          value={get(state.form, 'unit_value')}
        />
        <div className="float-right">
          <Button type="danger" onClick={() => history.push('/')}>Cancelar</Button>
          <Button type="success" onClick={handleCreateOrUpdateProduct}>Enviar</Button>
        </div>
      </>
    </ContainerPage>
  );
};

ProductPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductPage;
