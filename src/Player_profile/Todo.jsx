import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import { url } from '../url';


function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
    return [...a, ...not(b, a)];
}
var config = {
    method: 'get',
    url: 'http://4001-2409-4040-d89-2d86-f8fc-de43-c17d-e7ed.ngrok.io/gym/Exercise/3/3/',
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY'
    }
};

export default function Todo() {
    const [data, setData] = React.useState([])
    // React.useEffect(() => {
    //     axios(config)
    //         .then((x) => {
    //             x.data.map((i) => {
    //                 return setData([...data, i.name])
    //             })
    //             //    setData(x.data)
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         })
    // }, [])

    console.log(data);
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState(["Boxing Back",'Cricket']);
    const [right, setRight] = React.useState(["Yoga", 'Gym', 'boxing']);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = (items) => intersection(checked, items).length;

    const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const customList = (title, items) => (
        <Card>
            <CardHeader
                sx={{ px: 2, py: 1 }}
                avatar={
                    <Checkbox
                        onClick={handleToggleAll(items)}
                        checked={numberOfChecked(items) === items.length && items.length !== 0}
                        indeterminate={
                            numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
                        }
                        disabled={items.length === 0}
                        inputProps={{
                            'aria-label': 'all items selected',
                        }}
                    />
                }
                title={title}
                subheader={`${numberOfChecked(items)}/${items.length} selected`}
            />
            <Divider />
            <List
                sx={{
                    width: 400,
                    height: 300,
                    bgcolor: 'background.paper',
                    overflow: 'auto',
                }}
                dense
                component="div"
                role="list"
            >
                {items.map((value) => {
                    const labelId = `transfer-list-all-item-${value}-label`;

                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                            button
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${value}`} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Card>
    );

    return (
        <Grid container spacing={1} >
            <Grid item>{customList('Routines Left 😥', left)}
                <Button
                    sx={{ my: 0.5 }}
                    variant="contained"
                    size="large"
                    onClick={handleCheckedRight}
                    disabled={leftChecked.length === 0}
                    aria-label="move selected right"
                    style={{
                        backgroundColor: "#f2cf07",
                    }}
                >
                    Complete &nbsp;&gt;
                </Button></Grid>
            <Grid item>{customList('Routines Completed 😍', right)}
                <Button
                    sx={{ my: 0.5 }}
                    variant="contained"
                    size="large"
                    onClick={handleCheckedLeft}
                    disabled={rightChecked.length === 0}
                    aria-label="move selected left"
                    style={{
                        backgroundColor: "#f2cf07",
                    }}
                >
                    &lt; &nbsp;Pending
                </Button></Grid>
        </Grid>
    );
}
