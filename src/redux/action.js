import { GET_METHODS, GET_CALCULATE_CRYPTO } from './actionTypes';
import { getMethodList, calculateCrypto } from '../services/gateway';

export const getMethod = () => {
  const getMethodAction = methodList => {
    return {
      type: GET_METHODS,
      payload: { methodList },
    };
  };

  return dispatch => {
    getMethodList().then(methodList => {
      dispatch(getMethodAction(methodList));
    });
  };
};

export const calcCrypto = () => {
  const calculateCryptoAction = amount => {
    return {
      type: GET_CALCULATE_CRYPTO,
      payload: { amount },
    };
  };

  return dispatch => {
    calculateCrypto().then(methodList => {
      dispatch(calculateCryptoAction(methodList));
    });
  };
};
