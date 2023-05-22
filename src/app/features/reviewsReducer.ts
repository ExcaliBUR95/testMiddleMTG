const initialState = {
    reviews: [],
  };
  
  const reviewsReducer: any = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case 'GET_REVIEWS':
        return {
          ...state,
          reviews: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reviewsReducer;
  