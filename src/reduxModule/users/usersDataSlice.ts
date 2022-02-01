import {createSlice} from '@reduxjs/toolkit';

const initialState ={
  rowsValue: [
    {
      id: '1',
      name: 'Васильева Анна',
      note: 'H',
      dateValue: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
    },
    {
      id: '2',
      name: 'Сергеев Сергей',
      note: 'H',
      dateValue: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
    }, {
      id: '3',
      name: 'Иванов Иван',
      note: 'H',
      dateValue: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
    },
    {
      id: '4',
      name: 'Данилов Даниил',
      note: 'H',
      dateValue: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
    },
    {
      id: '5',
      name: 'Петров Петр',
      note: 'H',
      dateValue: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
    },
    {
      id: '6',
      name: 'Алейникова Вероника',
      note: 'H',
      dateValue: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
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
