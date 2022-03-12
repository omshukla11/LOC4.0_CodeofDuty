import './App.css';
import Signup from './Accounts/Signup';
import Login from './Accounts/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as chatT  } from 'styled-components';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Contactus from './Accounts/Contactus';
import Demo from './Accounts/demo';
import SimpleForm from './Accounts/Chatbot';
import { Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
// import CustomizedDialogs from './chatty';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Draggable from 'react-draggable';
import Feedback from './Accounts/Feedback';
import VideoChat from './Accounts/VideoChat';
import Video from './Accounts/Video';
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
      fullWidth
    >
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

  const chatTheme = {
    background: 'green',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
        <Button  onClick={handleClickOpen}>
          <img width='50' src='https://cdn-icons.flaticon.com/png/512/1734/premium/1734162.png?token=exp=1646899187~hmac=cd2c93da2c0b67670f14d0941c4a5ecb' alt='robot'></img>
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          open={open}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"

        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Welcome to Chatty ;)
          </DialogTitle>
            <SimpleForm />
        </BootstrapDialog>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" >
                <Login />
              </Route>
              <Route exact path="/Login" >
                <Login />
              </Route>
              <Route path="/Signup">
                <Signup />
              </Route>
              <Route path="/demo">
                <Demo />
              </Route>
              <Route path="/contactus">
                <Contactus />
              </Route>
              {/* <Route path='/chat'>
                <CustomizedDialogs />
              </Route> */}
              <Route path="/ContactUs">
                <Contactus />
              </Route>
              <Route path="/Feedback">
                <Feedback/>
              </Route>
              <Route path="/videochat">
                <VideoChat/>
              </Route>
              <Route path="/video">
                <Video/>
              </Route>
            </Switch>
          </div>
        </Router>
       
       

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
