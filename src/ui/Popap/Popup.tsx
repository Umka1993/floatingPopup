import React, {useEffect, useState} from 'react';
import s from './popup.module.scss';
import {useAppSelector} from '../../core/redux/hooks/redux';
import {IUser} from '../../type/type';

export const Popup = () => {
  const {rowsValue, userId, date} =useAppSelector((state) => state.users);
  const [user, setUser] = useState<IUser>();


  useEffect( ()=>{
    if (rowsValue && userId) {
      const selectedUser = rowsValue.find((i)=>i.id===`${userId}`);
      setUser(selectedUser);
    }
  }, [userId]);
  return (
    <div className={s.block}>
      <h2>Поставить Отметку</h2>
      <div className={s.row}>
        <p >Студент</p>
        <p >{user?.name}</p>
      </div>
      <div className={s.row}>
        <p >Дата</p>
        <p>{date}</p>
      </div>
      <label htmlFor="">
        <input type="checkbox"/>
                Не присутствовал
      </label>

      <input type="text" value={user?.absent}
      />

      <button>Поставить отметку</button>

    </div>
  );
};
