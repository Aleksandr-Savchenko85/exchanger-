import { GET_METHODS, GET_CONVERT_CRYPTO } from './actionTypes';
import { getMethodList } from '../services/gateway';

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
