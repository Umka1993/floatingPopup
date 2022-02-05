import {createSlice} from '@reduxjs/toolkit';

const initialState ={
  userNames: [
    {
      id: '1',
      name: 'Васильева Анна',
    },
    {
      id: '2',
      name: 'Сергеев Сергей',
    },
    {
      id: '3',
      name: 'Иванов Иван',
    },
    {
      id: '4',
      name: 'Данилов Даниил',
    },
    {
      id: '5',
      name: 'Петров Петр',
    },
    {
      id: '6',
      name: 'Алейникова Вероника',
    },
  ],
  rowsValue: [
    {

      id: '1',
      note: 'H',
      dateValue: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
      year: '25',
      city: 'Moskow',
      color: 'black',
      size: 'L',
      address: 'Street',
      street: 'Kulas Light',
      suite: 'Apt. 556',
      zipcode: '92998-3874',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',

    },
    {

      id: '2',
      note: 'H',
      dateValue: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
      year: '25',
      city: 'Moskow',
      color: 'black',
      size: 'L',
      address: 'Street',
      street: 'Kulas Light',
      suite: 'Apt. 556',
      zipcode: '92998-3874',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',

    }, {

      id: '3',
      note: 'H',
      dateValue: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
      year: '25',
      city: 'Moskow',
      color: 'black',
      size: 'L',
      address: 'Street',
      street: 'Kulas Light',
      suite: 'Apt. 556',
      zipcode: '92998-3874',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',

    },
    {

      id: '4',
      note: 'H',
      dateValue: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
      year: '25',
      city: 'Moskow',
      color: 'black',
      size: 'L',
      address: 'Street',
      street: 'Kulas Light',
      suite: 'Apt. 556',
      zipcode: '92998-3874',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',

    },
    {

      id: '5',
      note: 'H',
      dateValue: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
      year: '25',
      city: 'Moskow',
      color: 'black',
      size: 'L',
      address: 'Street',
      street: 'Kulas Light',
      suite: 'Apt. 556',
      zipcode: '92998-3874',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',

    },
    {

      id: '6',
      note: 'H',
      dateValue: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
      year: '25',
      city: 'Moskow',
      color: 'black',
      size: 'L',
      address: 'Street',
      street: 'Kulas Light',
      suite: 'Apt. 556',
      zipcode: '92998-3874',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',

    },
  ],
  userId: '',
  date: new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear(),
};


const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserId(state, {payload}) {
      state.userId = payload;
    },
  },
});

export const userSlice = UsersSlice.reducer;
export const {
  setUserId,
} = UsersSlice.actions;
