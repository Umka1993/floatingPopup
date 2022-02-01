import {combineReducers} from '@reduxjs/toolkit';
import {userSlice} from '../../reduxModule/users/usersDataSlice';

export const rootReducer = combineReducers({
  users: userSlice,
});
