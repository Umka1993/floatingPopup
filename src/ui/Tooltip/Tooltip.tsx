import * as React from 'react';
import {ReactNode, useState} from 'react';
import Grid from '@mui/material/Grid';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Button from '@mui/material/Button';
import {Popup} from '../Popap/Popup';
import {Tooltip} from '@mui/material';


export const TriggersTooltips = ({children}:{children:ReactNode})=>{
  const [open, openModal] = useState(false);

  const setModal = ()=>{
    openModal((prevState) => !prevState);
  };


  const handleTooltipClose = () => {
    openModal(false);
  };


  return (
    <div >
      <Grid container justifyContent="center">
        <Grid item>
          <ClickAwayListener
            onClickAway={handleTooltipClose}
          >

            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              onOpen={()=>console.log('open')}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="right-start"
              id={'shadow'}
              classes={{
                tooltip: 'tooltipe',
                arrow: 'arrow',
              }}
              arrow
              title={<React.Fragment >
                <Popup modalClose={setModal}/>
              </React.Fragment>}
            >
              <Button onClick={setModal}>

                {children}

              </Button>
            </Tooltip>

          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
};
