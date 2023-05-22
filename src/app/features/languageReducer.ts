import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    language: 'ru', 
  };
  
  const languageReducer: any = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
      case 'SET_LANGUAGE':
        return {
          ...state,
          language: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default languageReducer;
  