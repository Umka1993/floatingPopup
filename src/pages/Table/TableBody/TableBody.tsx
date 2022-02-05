import React from 'react';
import s from './tableBody.module.scss';
import {TableHeader} from './TableHeader/TableHeader';
import {useAppSelector} from '../../../core/redux/hooks/redux';
import {TableRow} from './TableRow/TableRow';

export const TableBody = () => {
  const {date, rowsValue, userNames} = useAppSelector((state) => state.users);
  const headerTable = [
    {
      value: 'Системный подход к',
    },
    {
      value: date,
    },
    {
      value: 'Системный подход к ',
    },
    {
      value: 'Отсутствий',
    },
    {
      value: 'Балы по практ.занятиям',
    },
    {
      value: 'Итоговая оценка',
    },
    {
      value: 'Улица',
    },
    {
      value: 'suite',
    },
    {
      value: 'zipcode',
    },
    {
      value: 'phone',
    },
    {
      value: 'website',
    },
  ];


  return (
    <>
      <table className={s.wrap}>
        <table className={s.fixed} >
          <thead>
            <tr>
              <td>П</td>
              <td>ФИО</td>
            </tr>
          </thead>
          <tbody>
            {userNames.map( (user)=>{
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              );
            })
            }
          </tbody>
        </table>
        <table className={s.scrollContainer}>
          <thead>
            <tr>
              {headerTable.map((item)=>
                <TableHeader key={item.value} value={item.value}/>,
              )}
            </tr>
          </thead>
          <tbody>
            {rowsValue.map((item)=>
              <TableRow key={item.id} {...item}/>,
            )}
          </tbody>
        </table>
      </table>


    </>
  );
};
