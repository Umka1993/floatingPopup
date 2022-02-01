import React from 'react';
import './tableHeader.module.scss';


export const TableHeader = ({value}: {value: string}) => {
  return (
    <>
      <td>{value}</td>
    </>

  );
};
