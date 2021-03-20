import { configureStore } from '@reduxjs/toolkit';
import userLoggedIn from '../store/userLoggedInSlice';

export default configureStore({
  reducer: {
    userLoggedIn: userLoggedIn,
  },
});
