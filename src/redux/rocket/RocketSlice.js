import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch(url);
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
      const data = JSON.parse(localStorage.getItem('rockets')) || state.rockets;
      const newState = data.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      state.rockets = newState;
      localStorage.setItem('rockets', JSON.stringify(newState));
    },

    cancelReservation: (state, action) => {
      const data = JSON.parse(localStorage.getItem('rockets')) || state.rockets;
      const newState = data.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      state.rockets = newState;
      localStorage.setItem('rockets', JSON.stringify(newState));
    },
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchRockets.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.rockets = action.payload;
    },
    [fetchRockets.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { reserveRocket, cancelReservation } = rocketSlice.actions;

export default rocketSlice.reducer;
