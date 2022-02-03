import React, {useEffect, useState} from 'react';
import s from './tableBody.module.scss';
import {TableHeader} from './TableHeader/TableHeader';
import {useAppSelector} from '../../../core/redux/hooks/redux';
import {TableRow} from './TableRow/TableRow';
import {setModalOpen, setUserId} from '../../../reduxModule/users/usersDataSlice';
import {useDispatch} from 'react-redux';

export const TableBody = () => {
  const {date, rowsValue, userNames, modalOpen} = useAppSelector((state) => state.users);
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
  const [selectedId, setSelectedId] = useState('');

  const dispatch = useDispatch();

  const setUserData = (id:string)=>{
    dispatch(setModalOpen(id));
    const number = id.split('');
    dispatch(setUserId(number[0]));
  };

  useEffect( ()=>{
    setUserData(selectedId);
  }, [selectedId]);


  return (
    <div className={s.block}>
      <table>
        <div className={s.wrap}>
          <div className={s.fixedBlock}>
            <table>
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
          </div>
          <div className={`${modalOpen ? 'shadow' : ''} ${s.scrollContainer}`}>
            {/* <HorizontalScroll>*/}
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
                  <TableRow key={item.id} {...item} setSelectedId={setSelectedId}/>,
                )}
              </tbody>
            </table>

            {/* </HorizontalScroll>*/}

          </div>
        </div>

      </table>


    </div>
  );
};
