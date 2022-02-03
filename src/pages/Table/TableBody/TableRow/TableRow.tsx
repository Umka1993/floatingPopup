import React from 'react';
import {IUser} from '../../../../type/type';
import {TriggersTooltips} from '../../../../ui/Tooltip/Tooltip';
import {useAppSelector} from '../../../../core/redux/hooks/redux';


export const TableRow = ({id, noteAnalitic, note, dateValue, balls, finalGrade, absent,
  street,
  suite,
  zipcode,
  phone,
  website,
  setSelectedId,
}:IUser):JSX.Element => {
  const {modalOpen}= useAppSelector((state) => state.users);


  return (
    <>
      <tr>
        <td id={`${id}noteAnalitic`}
          className={modalOpen === `${id}noteAnalitic` ? 'shadow' : undefined}
          onClick={ ((event) => setSelectedId ? setSelectedId(event.currentTarget.id) : null)}
        >
          <TriggersTooltips>
            {noteAnalitic}
          </TriggersTooltips>
        </td>
        <td id={`${id}note`}
          className={modalOpen === `${id}note` ? 'shadow' : undefined}
          onClick={ ((event) => setSelectedId ? setSelectedId(event.currentTarget.id) : null)}
        >
          <TriggersTooltips>
            {note}
          </TriggersTooltips>
        </td>
        <td id={`${id}dateValue`}
          className={modalOpen === `${id}dateValue` ? 'shadow' : undefined}
          onClick={ ((event) => setSelectedId ? setSelectedId(event.currentTarget.id) : null)}
        >
          <TriggersTooltips>
            {dateValue}
          </TriggersTooltips>
        </td>
        <td id={`${id}absent`}
          className={modalOpen === `${id}absent` ? 'shadow' : undefined}
          onClick={ ((event) => setSelectedId ? setSelectedId(event.currentTarget.id) : null)}
        >
          <TriggersTooltips>
            {absent}
          </TriggersTooltips>
        </td>
        <td id={`${id}balls`}
          className={modalOpen === `${id}balls` ? 'shadow' : undefined}
          onClick={ ((event) => setSelectedId ? setSelectedId(event.currentTarget.id) : null)}
        >
          <TriggersTooltips>
            {balls}
          </TriggersTooltips>
        </td>
        <td id={`${id}finalGrade`}
          className={modalOpen === `${id}finalGrade` ? 'shadow' : undefined}
          onClick={ ((event) => setSelectedId ? setSelectedId(event.currentTarget.id) : null)}
        >
          <TriggersTooltips>
            {finalGrade}
          </TriggersTooltips>
        </td>
        <td id={`${id}street`}
          className={modalOpen === `${id}street` ? 'shadow' : undefined}
          onClick={ ((event) => setSelectedId ? setSelectedId(event.currentTarget.id) : null)}
        >
          <TriggersTooltips>
            {street}
          </TriggersTooltips>
        </td>
        <td id={`${id}suite`}
          className={modalOpen === `${id}suite` ? 'shadow' : undefined}
          onClick={ ((event) => setSelectedId ? setSelectedId(event.currentTarget.id) : null)}
        >
          <TriggersTooltips>
            {suite}
          </TriggersTooltips>
        </td>
        <td id={`${id}zipcode`}
          className={modalOpen === `${id}zipcode` ? 'shadow' : undefined}
          onClick={ ((event) => setSelectedId ? setSelectedId(event.currentTarget.id) : null)}
        >
          <TriggersTooltips>
            {zipcode}
          </TriggersTooltips>
        </td>
        <td id={`${id}phone`}
          className={modalOpen === `${id}phone` ? 'shadow' : undefined}
          onClick={ ((event) => setSelectedId ? setSelectedId(event.currentTarget.id) : null)}
        >
          <TriggersTooltips>
            {phone}
          </TriggersTooltips>
        </td>
        <td id={`${id}website`}
          className={modalOpen === `${id}website` ? 'shadow' : undefined}
          onClick={ ((event) => setSelectedId ? setSelectedId(event.currentTarget.id) : null)}
        >
          <TriggersTooltips>
            {website}
          </TriggersTooltips>
        </td>
      </tr>
    </>

  );
};
