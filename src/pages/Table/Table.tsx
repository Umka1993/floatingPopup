import React from 'react';
import s from './table.module.scss';
import {TableBody} from './TableBody/TableBody';


export const Table = () => {
  return (
    <div className={s.block}>
      <h1 className={s.title}>Электронный журнал дисциплины</h1>
      <TableBody/>
    </div>
  );
};
