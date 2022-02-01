import React from 'react';
import s from './tableRow.module.scss';
import {IUser} from '../../../../type/type';
import {Example} from '../../../../ui/Popap/Popup';


export const TableRow = ({id, noteAnalitic, note, noteDate, balls, finalGrade, name, absent}:IUser):JSX.Element => {
  // const {
  //   getArrowProps,
  //   getTooltipProps,
  //   setTooltipRef,
  //   setTriggerRef,
  //   visible,
  // } = usePopperTooltip({
  //   trigger: 'click',
  //   interactive: true,
  //   placement: 'auto-start',
  //   // onVisibleChange: setMountedOnceVisible,
  // });

  return (
    <>
      <tr>
        <td className={s.id}>{id}</td>
        <td className={s.name}>{name}</td>
        <td>{noteAnalitic}</td>
        <td>{note}</td>
        <td>{noteDate}</td>
        <td>{absent}</td>
        <td>{balls}</td>
        <td>{finalGrade}</td>
      </tr>
      <Example/>

      {/* <div*/}
      {/*  ref={setTooltipRef}*/}
      {/*  {...getTooltipProps({*/}
      {/*    className: 'tooltip-container',*/}
      {/*    style: visible ?*/}
      {/*          {visibility: 'visible'} :*/}
      {/*          {visibility: 'hidden', pointerEvents: 'none'},*/}
      {/*  })}*/}
      {/* >*/}
      {/*  <div*/}
      {/*    {...getArrowProps({className: 'tooltip-arrow'})}*/}
      {/*  />*/}
      {/*  {<Popup/>}*/}
      {/* </div>*/}
    </>

  );
};
