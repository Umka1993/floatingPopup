import * as React from 'react';
import {styled} from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const AntTabs = styled(Tabs)({
  'borderBottom': '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
    height: '100%',
    borderRadius: '9px',
  },
});

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
    ({theme}) => ({
      'textTransform': 'none',
      'minWidth': 0,
      [theme.breakpoints.up('sm')]: {
        minWidth: 0,
      },
      'fontWeight': theme.typography.fontWeightRegular,
      'marginRight': theme.spacing(1),
      'color': 'black',
      'fontFamily': [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&.Mui-selected': {
        color: 'white',
        zIndex: '9',
        fontWeight: theme.typography.fontWeightMedium,

      },
      '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
      },
    }),
);

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{children: <span className="MuiTabs-indicatorSpan" />}}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',

  },
});

interface StyledTabProps {
    label: string;
    onClick?: ()=> void;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({theme}) => ({
  'textTransform': 'none',
  'fontWeight': theme.typography.fontWeightRegular,
  'fontSize': theme.typography.pxToRem(15),
  'marginRight': theme.spacing(1),
  'color': 'black',
  '&.Mui-selected': {
    color: 'black',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

export const ColorTabs = () =>{
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{bgcolor: '#fff'}}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Учебная деятельность" />
          <AntTab label="Курсовые" />
          <AntTab label="Практики" />
        </AntTabs>
        <Box sx={{p: 3}} />
      </Box>
      <Box >
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >

          <StyledTab label="Учебная деятельность" />
          <StyledTab label="Курсовые" />
          <StyledTab label="Практики" />
        </StyledTabs>
        <Box sx={{p: 3}} />
      </Box>
    </Box>
  );
};
