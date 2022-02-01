import React from 'react';
import s from './tableBody.module.scss';
import {TableRow} from './TableRow/TableRow';
import {TableHeader} from './TableHeader/TableHeader';
import {useAppSelector} from '../../../core/redux/hooks/redux';

export const TableBody = () => {
  const headerTable = [
    {
      value: 'П',
    },
    {
      value: 'ФИО студента',
    },
    {
      value: 'Системный подход к ',
    },
    {
      value: '21.11.21',
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
  ];
  const {rowsValue} =useAppSelector((state) => state.users);
  return (
    <div className={s.block}>
      <table>
        <thead>
          <tr>
            {headerTable.map((item)=>
              <TableHeader key ={item.value} value={item.value}/>,
            )}
          </tr>
        </thead>
        <tbody>

          {rowsValue.map((item)=>
            <TableRow key={item.id} {...item}/>,
          )}

        </tbody>
      </table>
    </div>
  );
};
