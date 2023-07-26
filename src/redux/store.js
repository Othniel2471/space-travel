import { configureStore } from '@reduxjs/toolkit';
import RocketSlice from './rocket/RocketSlice';
import missionReducer from './mission/MissionSlice';

const store = configureStore({
  reducer: {
    rockets: RocketSlice,
    missions: missionReducer,
  },
});

export default store;
