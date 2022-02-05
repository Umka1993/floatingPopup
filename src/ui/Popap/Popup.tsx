import React, {useEffect, useState} from 'react';
import s from './popup.module.scss';
import {useAppSelector} from '../../core/redux/hooks/redux';
import {IUser} from '../../type/type';

export const Popup = ({modalClose}:{modalClose:()=>void }) => {
  const {rowsValue, userId, date, userNames} =useAppSelector((state) => state.users);
  const [user, setUser] = useState<IUser>();
  const [userName, setUserName] = useState<string>();


  useEffect( ()=>{
    if (rowsValue && userId && userNames) {
      const selectedData = rowsValue.find((i)=>i.id===`${userId}`);
      const selectedUserName = userNames.find((i)=>i.id===`${userId}`);
      setUser(selectedData);
      setUserName(selectedUserName?.name);
    }
  }, [userId]);


  return (
    <div className={s.block}>
      <h2>Поставить Отметку</h2>
      <div className={s.row}>
        <p >Студент</p>
        <p >{userName}</p>
      </div>
      <div className={s.row}>
        <p >Дата</p>
        <p>{date}</p>
      </div>
      <label htmlFor="">
        <input type="checkbox"/>
                Не присутствовал
      </label>

      <input className={s.textInput} type="text" value={user?.absent}
      />

      <div className={s.button}>
        <button onClick={modalClose}>Поставить отметку</button>
      </div>

    </div>
  );
};
