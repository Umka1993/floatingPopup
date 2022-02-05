import React from 'react';
import {IUser} from '../../../../type/type';
import {TriggersTooltips} from '../../../../ui/Tooltip/Tooltip';
import {useDispatch} from 'react-redux';
import {setUserId} from '../../../../reduxModule/users/usersDataSlice';


export const TableRow = ({id, noteAnalitic, note, dateValue, balls, finalGrade, absent,
  street,
  suite,
  zipcode,
  phone,
  website,
}:IUser):JSX.Element => {
  const dispatch = useDispatch();

  const setUserData = (id:string)=>{
    dispatch(setUserId(id));
  };

  return (
    <>
      <tr>
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
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips>
            {street}
          </TriggersTooltips>
        </td>
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips>
            {suite}
          </TriggersTooltips>
        </td>
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips>
            {zipcode}
          </TriggersTooltips>
        </td>
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips>
            {phone}
          </TriggersTooltips>
        </td>
        <td onClick={()=>setUserData(id)}>
          <TriggersTooltips>
            {website}
          </TriggersTooltips>
        </td>
      </tr>
    </>

  );
};
