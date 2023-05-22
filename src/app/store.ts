import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import languageReducer from './features/languageReducer';
import reviewsReducer from './features/reviewsReducer';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    reviews: reviewsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
