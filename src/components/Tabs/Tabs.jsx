import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {TabContext, TabList, TabPanel} from "@mui/lab";
import NewsCrewPage from "../../PageHome/Container/NewsCrew/NewsCrewPage";

export default function ColorTabs({authentication}) {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Café concert" value="1" />
                        <Tab label="Location salle" value="2" />
                        <Tab label="Gîte" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <NewsCrewPage page="Tab1" authentication={authentication}/>
                </TabPanel>
                <TabPanel value="2">
                    <NewsCrewPage page="Tab2" authentication={authentication}/>
                </TabPanel>
                <TabPanel value="3">
                    <NewsCrewPage page="Tab3" authentication={authentication}/>
                </TabPanel>
            </TabContext>
        </Box>
    );
}