import { ADD_PRODUCTS, REMOVE_PRODUCTS } from "../types/productTypes";

const initialState = {
  products: [],
};
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCTS: {
      const newList = [...state.products];
      let indexProduct = newList.findIndex((x) => x["id"] === payload["id"]);
      if (indexProduct === -1) {
        newList.push(payload);
        indexProduct = newList.length - 1;
      }
      return {
        ...state,
        products: [...newList], //state.products.concat(payload)
      };
    }
    case REMOVE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload.id),
      };
    default:
      return state;
  }
};

export default productReducer;