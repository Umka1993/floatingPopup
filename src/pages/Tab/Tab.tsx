import React from 'react';
import s from './tab.module.scss';
import {ColorTabs} from '../../ui/ColorTab/ColorTab';


export const Tab = ():JSX.Element => {
  return (
    <div className={s.block}>
      <ColorTabs/>
    </div>
  );
};

