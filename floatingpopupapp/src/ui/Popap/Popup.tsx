import s from './popup.module.scss';
// import 'react-popper-tooltip/dist/styles.css';
import React, {ReactNode} from 'react';
// import {default as PopperTooltipTrigger} from 'react-popper-tooltip';
import AutoSizer from 'react-virtualized-auto-sizer';
import {FixedSizeList as List, areEqual} from 'react-window';
import {usePopperTooltip} from 'react-popper-tooltip';

// const Popup = () => {
//   return (
//     <div className={s.block}>
//       <h2>Поставить Отметку</h2>
//       <p>Студент</p>
//       <p>Васильева Анна</p>
//       <p>21.11.2021</p>
//       <label htmlFor="">
//         <input type="checkbox"/>
//                 Не присутствовал
//       </label>
//
//       <input type="text"/>
//
//       <div className={s.button}>
//         <button>Поставить отметку</button>
//       </div>
//     </div>
//   );
// };
const {
  getArrowProps,
  getTooltipProps,
  tooltipRef,
  setTooltipRef,
  // setTriggerRef,
  visible,
} = usePopperTooltip({
  placement: 'auto-start',
  trigger: 'click',
});


// eslint-disable-next-line react/display-name
const Trigger = (children:ReactNode) => ({triggerRef, getTriggerProps}:{triggerRef:any, getTriggerProps: any}) => (
  <span
    key="tooltip-span"
    id="tooltip-span"
    {...getTriggerProps({
      ref: triggerRef,
    })}
  >
    {children}
  </span>
);

// eslint-disable-next-line react/display-name
const Tooltip = (tooltip:any, hideArrow:any) => ({
  arrowRef,
  //   tooltipRef,
  //   getArrowProps,
  //   getTooltipProps,
  placement,
}:{
  arrowRef: any,
  //     tooltipRef: any,
  //     getArrowProps: any,
  //     getTooltipProps: any,
  placement: any,

}) => {
  return (
    <div key="tooltip" id="tooltip">
      {!hideArrow ? (
                <div
                  {...getTooltipProps({
                    ref: tooltipRef,
                  })}
                >
                  <div
                    {...getArrowProps({
                      'data-placement': placement,
                      'ref': arrowRef,
                    })}
                  />
                  {tooltip}
                </div>
            ) : (
                <div
                  {...getTooltipProps({
                    ref: tooltipRef,
                  })}
                >
                  {tooltip}
                </div>
            )}
    </div>
  );
};
const TooltipTrigger = (props: any) => {
  const {
    tooltip,
    children,
    hideArrow,
    // trigger, placement,
    ref,
  } = props;

  // @ts-ignore
  return (
  // @ts-ignore
  //   <PopperTooltipTrigger
  //     trigger={trigger || 'click'}
  //     placement={placement || 'auto'}
  //     /* eslint-disable-next-line new-cap */
  //     tooltip={Tooltip(tooltip, hideArrow)}
  //   >
  //     {/* eslint-disable-next-line new-cap */}
  //     {Trigger(children)}
  //   </PopperTooltipTrigger>
    <div
      ref={ref}
      {...getTooltipProps({
        className: 'tooltip-container',
        style: visible ?
              {visibility: 'visible'} :
              {visibility: 'hidden', pointerEvents: 'none'},
      })}
    >
      <div
        {...getArrowProps({className: 'tooltip-arrow'})}
      />
      {/* eslint-disable-next-line new-cap */}
      {Trigger(children)}

      {/* eslint-disable-next-line new-cap */}
      {Tooltip(tooltip, hideArrow)}
    </div>
  );
};
const Row = ({index, style}:{index: number; style: any}) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    <TooltipTrigger tooltip="popped" trigger="click" ref={setTooltipRef}
    >
      <td className={s.id}> ghbdtn</td>

    </TooltipTrigger>
  </div>
);

export const Example = () => {
  debugger;
  return (
    <AutoSizer>
      {({height, width}: { height: number, width: number }) => (
        <List
          className="List"
          height={height}
          itemCount={1000}
          itemSize={35}
          width={width}
        >
          {React.memo(Row, areEqual)}
        </List>
      )}
    </AutoSizer>
  );
};


// export const Popper = ()=>{
// const [mounted, setMounted] = useState(false);
// const setMountedOnceVisible = (visible:any)=>{
//   if (!mounted && visible) {
//     setMounted(true);
//   }
// };
// const {
//   getArrowProps,
//   getTooltipProps,
//   setTooltipRef,
//   // setTriggerRef,
//   visible,
// } = usePopperTooltip({
//   trigger: 'click',
//   interactive: true,
//   // onVisibleChange: setMountedOnceVisible,
// });


//   return (
//     <>
//       {/* <button type="button" ref={setTriggerRef}>*/}
//       {/*          Trigger element*/}
//       {/* </button>*/}
//
//       {/* {mounted && (*/}
//       <div
//         ref={setTooltipRef}
//         {...getTooltipProps({
//           className: 'tooltip-container',
//           style: visible ?
//                             {visibility: 'visible'} :
//                             {visibility: 'hidden', pointerEvents: 'none'},
//         })}
//       >
//         <div
//           {...getArrowProps({className: 'tooltip-arrow'})}
//         />
//         {/* <HeavyCalculations />*/}
//         <Popup/>
//       </div>
//       {/* )}*/}
//     </>
//   );
// };
