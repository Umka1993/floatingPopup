import React from 'react';
import s from './tableBody.module.scss';
import {TableHeader} from './TableHeader/TableHeader';
import {useAppSelector} from '../../../core/redux/hooks/redux';
import {TableRow} from './TableRow/TableRow';

export const TableBody = () => {
  const {date} = useAppSelector((state) => state.users);
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
  ];
  const {rowsValue} =useAppSelector((state) => state.users);


  return (
    <div className={s.block}>
      <table>
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
    </div>
  );
};
