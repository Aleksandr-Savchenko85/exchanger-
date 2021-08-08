import { GET_METHODS } from './actionTypes';

const initialState = {
  methods: [],
};

const methodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_METHODS:
      return {
        ...state,
        methods: [...state.methods, action.payload.methodList],
      };

    default:
      return state;
  }
};

export default methodsReducer;
