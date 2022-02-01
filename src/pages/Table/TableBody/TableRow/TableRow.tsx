import React from 'react';
import './tableRow.module.scss';
import {IUser} from '../../../../type/type';
import {TriggersTooltips} from '../../../../ui/Popap/Button';
import {useDispatch} from 'react-redux';
import {setUserId} from '../../../../reduxModule/users/usersDataSlice';


export const TableRow = ({id, noteAnalitic, note, dateValue, balls, finalGrade, name, absent}:IUser):JSX.Element => {
  const dispatch = useDispatch();

  const setUserData = (id:string)=>{
    dispatch(setUserId(id));
  };

  return (
    <>
      <tr>
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips >
            {id}
          </TriggersTooltips>
        </td>
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips>
            {name}
          </TriggersTooltips>
        </td>
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips>
            {noteAnalitic}
          </TriggersTooltips>
        </td>
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips>
            {note}
          </TriggersTooltips>
        </td>
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips>
            {dateValue}
          </TriggersTooltips>
        </td>
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips>
            {absent}
          </TriggersTooltips>
        </td>
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips>
            {balls}
          </TriggersTooltips>
        </td>
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips>
            {finalGrade}
          </TriggersTooltips>
        </td>
      </tr>
    </>

  );
};
