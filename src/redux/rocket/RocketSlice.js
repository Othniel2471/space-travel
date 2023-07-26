import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios.get(url);
    const { data } = response;
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      rocketName: rocket.rocket_name,
      description: rocket.description,
      flickrImages: rocket.flickr_images[0],
      reserved: false,
    }));
    return rockets;
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: null,
    error: null,
  },
  reducers: {
    reserveRocket: (state, action) => {
      const { id } = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === id);
      if (rocket) {
        rocket.reserved = true;
      }
    },
    cancelReservation: (state, action) => {
      const { id } = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === id);
      if (rocket) {
        rocket.reserved = false;
      }
    },
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchRockets.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.rockets = action.payload; // Replace the existing rockets with the fetched rockets
    },
    [fetchRockets.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { reserveRocket, cancelReservation } = rocketSlice.actions;

export default rocketSlice.reducer;
