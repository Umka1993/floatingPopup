import {createSlice} from '@reduxjs/toolkit';

const initialState ={
  rowsValue: [
    {
      id: '1',
      name: 'Васильева Анна',
      note: 'H',
      noteDate: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
    },
    {
      id: '2',
      name: 'Васильева Анна',
      note: 'H',
      noteDate: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
    }, {
      id: '3',
      name: 'Васильева Анна',
      note: 'H',
      noteDate: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
    },
    {
      id: '4',
      name: 'Алейникова Вероника',
      note: 'H',
      noteDate: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
    },
    {
      id: '5',
      name: 'Алейникова Вероника',
      note: 'H',
      noteDate: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
    },
    {
      id: '6',
      name: 'Алейникова Вероника',
      note: 'H',
      noteDate: 'H',
      noteAnalitic: '5',
      absent: '5',
      balls: '105',
      finalGrade: '105',
    },
  ],
  isOpen: false,
};


const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setIsOpen(state, {payload}) {
      state.isOpen = payload;
    },
  },
});

export const userSlice = UsersSlice.reducer;
export const {
  setIsOpen,
} = UsersSlice.actions;
