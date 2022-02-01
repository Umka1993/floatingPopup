import * as React from 'react';
import {ReactNode} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {Popup} from './Popup';
import Tooltip from '@mui/material/Tooltip';


export const TriggersTooltips = ({children}:{children:ReactNode})=>{
  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
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
                title={
                  <React.Fragment>
                    <Popup/>
                  </React.Fragment>
                }
              >
                <Button onClick={handleTooltipOpen}>
                  {children}
                </Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
};
