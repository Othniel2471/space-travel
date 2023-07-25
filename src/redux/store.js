import { configureStore } from '@reduxjs/toolkit';
import RocketSlice from './rocket/RocketSlice';

const store = configureStore({
  reducer: {
    rockets: RocketSlice,
  },
});

export default store;
