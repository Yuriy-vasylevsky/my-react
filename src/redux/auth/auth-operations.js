// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unSet(token) {
//     axios.defaults.headers.common.Authorization = ``;
//   },
// };

// export const registerNewUser = createAsyncThunk(
//   'auth/registerNewUser',

//   async (user, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('users/signup', user);
//       // token.set(response.data.token);
//       return response.data;
//     } catch (err) {
//       rejectWithValue(alert(err.message));
//     }
//   },
// );
