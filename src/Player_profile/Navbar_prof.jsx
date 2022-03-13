import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useHistory } from 'react-router-dom';
import { Card } from '@mui/material';
export default function Navbar_prof() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const history = useHistory();
    return (
        <Card style={{ transform: 'translateY(-32px)' }}>
            <TabContext value={value}>

                <Box sx={{ width: '100%' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab value="one" label="Profile Dashboard" onClick={() => { history.push("/profile") }} />
                        <Tab value="two" label="Google Fit dashboard" onClick={() => history.push("/googlefit")} />
                        <Tab value="three" label="recommendation" />
                    </TabList>
                </Box>
            </TabContext>

        </Card>

    );
}
