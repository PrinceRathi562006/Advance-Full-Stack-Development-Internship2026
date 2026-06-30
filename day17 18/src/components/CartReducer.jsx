export const initialState = {
  cart: [],
  total: 0,
  discount: 0,
  finalTotal: 0,
  coupon: "",
};

// Helper Function
const calculateTotals = (cart, discount = 0) => {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const finalTotal = Math.max(total - discount, 0);

  return {
    total,
    discount,
    finalTotal,
  };
};

const CartReducer = (state, action) => {
  switch (action.type) {
    // ADD ITEM
    case "ADD_ITEM": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        updatedCart = [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }

      return {
        ...state,
        cart: updatedCart,
        ...calculateTotals(updatedCart, state.discount),
      };
    }

    // INCREMENT QUANTITY
    case "INCREMENT": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      return {
        ...state,
        cart: updatedCart,
        ...calculateTotals(updatedCart, state.discount),
      };
    }

    // DECREMENT QUANTITY
    case "DECREMENT": {
      const updatedCart = state.cart
        .map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        cart: updatedCart,
        ...calculateTotals(updatedCart, state.discount),
      };
    }

    // REMOVE ITEM
    case "REMOVE_ITEM": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        cart: updatedCart,
        ...calculateTotals(updatedCart, state.discount),
      };
    }

    // CLEAR CART
    case "CLEAR_CART":
      return {
        ...initialState,
      };

    // APPLY COUPON
    case "APPLY_COUPON": {
      const code = action.payload.trim().toUpperCase();

      const total = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      let discount = 0;

      switch (code) {
        case "SAVE10":
          discount = total * 0.1;
          break;

        case "SAVE20":
          discount = total * 0.2;
          break;

        case "SAVE30":
          discount = total * 0.3;
          break;

        case "FLAT100":
          discount = 100;
          break;

        case "FLAT500":
          discount = 500;
          break;

        case "SAVE90":
          discount = total * 0.9
          break;

        case "SAVE99":
          discount = total * 0.99
          break;

        case "FLAT5":
          discount = 5
          break;

        case "SAVE99.9":
          discount = total * 0.999
          break;

        case "ONLY1":
          discount = total - 1
          break;

        case "ONLY10":
          discount = total - 10
          break;

        case "ONLY20":
          discount = total - 20
          break;

        default:
          discount = 0;
      }

      return {
        ...state,
        coupon: code,
        ...calculateTotals(state.cart, discount),
      };
    }

    // REMOVE COUPON
    case "REMOVE_COUPON":
      return {
        ...state,
        coupon: "",
        ...calculateTotals(state.cart, 0),
      };

    default:
      return state;
  }
};

export default CartReducer;