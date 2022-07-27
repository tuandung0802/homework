import * as Actions from "../../../main/actionsType";
const initialState = [
  // {
  //   product: {
  //     category: "women's clothing",
  //     description:
  //       "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
  //     id: 20,
  //     image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  //     price: 12.99,
  //     rating: { rate: 3.6, count: 145 },
  //     title: "DANVOUY Womens T Shirt Casual Cotton Short",
  //   },
  //   quantity: 5,
  // },
  // {
  //   product: {
  //     id: 4,
  //     title: "Mens Casual Slim Fit",
  //     price: 15.99,
  //     description:
  //       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  //     rating: {
  //       rate: 2.1,
  //       count: 430,
  //     },
  //   },
  //   quantity: 6,
  // },
];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_MY_CART:
      return [...state];
    case Actions.ADD_MY_CART_SUCCESS: {
      console.log(action);
      return [...state, action.payload];
    }
    case Actions.RESET_CART: {
      return [];
    }
    case Actions.REMOVE_PRODUCT: {
      const index = state.findIndex((item) => item.id === action.payload.id);
      return state.filter((_, i) => i !== index);
    }
    default:
      return [...state];
  }
};
export default cartReducer;
