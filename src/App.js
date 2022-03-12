import './App.css';
import Signup from './Accounts/Signup';
import Login from './Accounts/Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as chatT } from 'styled-components';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Contactus from './Accounts/Contactus';
import Demo from './Accounts/demo';
import SimpleForm from './Accounts/Chatbot';
import { Button, Card } from '@mui/material';
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
import NavBar from './Dashboard/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Dashboard/footer';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import { SpeedDialIcon } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  useEffect(() => {
    Aos.init({ duration: 500, once: false });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'right',
        justifyContent: 'right',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        padding:'0%',
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
              <Route path="/contact us">
                <NavBar mode={mode} />

                <Contactus />
              </Route>
              {/* <Route path='/chat'>
                <CustomizedDialogs />
              </Route> */}
              {/* <Route path="/ContactUs">
                <Contactus />
              </Route> */}
              <Route path="/Feedback">
                <NavBar mode={mode} />

                <Feedback />
              </Route>
              <Route path="/videochat">
                <VideoChat />
              </Route>
              <Route path="/video">
                <Video />
              </Route>
              <Route path="/dashboard">
                <NavBar mode={mode} />
                <Dashboard />

                <SpeedDial
                  ariaLabel="SpeedDial basic example"
                 
                  sx={{ position: 'fixed', bottom: 16, right: 16 }}
                  icon={<SpeedDialIcon   />}

                >
                  <SpeedDialAction
                    key='Bot'
                    icon={<SmartToyIcon />}
                    tooltipTitle='Bot'
                    onClick={handleClickOpen}
                  />
                  <SpeedDialAction
                    key='Video call'
                    icon={<MissedVideoCallIcon />}
                    tooltipTitle='Video call'
                  />

                  <SpeedDialAction
                    key='Chat'
                    icon={<MarkUnreadChatAltIcon />}
                    tooltipTitle='Chat'
                  />

                </SpeedDial>
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
              </Route>
            </Switch>
          </div>
        </Router>



      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
