import React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

export const LessonTabs = () => {
  return (
    <Tabs defaultValue={0}>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </TabList>
      <TabPanel value={0}>First</TabPanel>
      <TabPanel value={1}>Second</TabPanel>
      <TabPanel value={2}>Third</TabPanel>
    </Tabs>
  );
};
