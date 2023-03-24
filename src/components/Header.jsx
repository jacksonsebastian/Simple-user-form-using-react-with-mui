import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShareIcon from '@mui/icons-material/Share';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab icon={<AccountBoxIcon/>} iconPosition="start" value="one" label="General" sx={{mr:6}}/>
        <Tab icon={<ReceiptIcon/>} iconPosition="start" value="two" label="Billing" sx={{mr:6}}/>
        <Tab icon={<NotificationsIcon/>} iconPosition="start" value="three" label="Notifications" sx={{mr:6}} />
        <Tab icon={<ShareIcon/>} iconPosition="start" value="four" label="Social Links" sx={{mr:6}}/>
        <Tab icon={<VpnKeyIcon/>} iconPosition="start" value="five" label="Change Password" sx={{mr:6}}/>
      </Tabs>
    </Box>
  );
}