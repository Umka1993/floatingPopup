import * as React from 'react';
import {ReactNode, useState} from 'react';
import Grid from '@mui/material/Grid';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {Popup} from '../Popap/Popup';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';


export const TriggersTooltips = ({children}:{children:ReactNode})=>{
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };


  return (
    <div >
      <Grid container justifyContent="center">
        <Grid item>
          <ClickAwayListener
            onClickAway={handleTooltipClose}
          >
            <div >
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                placement="right-start"
                classes={{
                  tooltip: 'tooltipe',
                  arrow: 'arrow',
                }}
                arrow
                title={<React.Fragment >
                  <Popup handleTooltipClose={handleTooltipClose}/>
                </React.Fragment>}
              >
                <Button onClick={handleTooltipOpen}>
                  <td tabIndex={1}>
                    {children}
                  </td>
                </Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
};
