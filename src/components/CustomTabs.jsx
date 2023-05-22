import React, { useState } from 'react'
import Tabs from "@mui/joy/Tabs"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function CustomTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (newValue) => {
      setValue(newValue);
    };

  return (

    <>
    
    {/* <Tabs centered variant='scrollable' scrollButtons allowScrollButtonsMobile onChange={handleChange} value={1}>
        <TabList>
            <Tab>First</Tab>
            <Tab>Second</Tab>
            <Tab>Third</Tab>
        </TabList>
        <TabPanel  value={number}>
            First Content
        </TabPanel>
        <TabPanel value={number}>
            Second Content
        </TabPanel>

        <TabPanel value={number}>
            Third Content
        </TabPanel>
    </Tabs> */}

<Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>

    </>
    
  )
}

export default CustomTabs