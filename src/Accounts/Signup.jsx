import * as React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {
    Grid,
    TextField,
    InputAdornment,
    Tooltip,
    IconButton,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
} from "@mui/material";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import chart from '../Images/chart.png'
import Swal from "sweetalert2";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { FormatAlignLeftSharp } from "@mui/icons-material";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
            style={{ fontSize: "1.1rem" }}
        >
            {"Copyright © "}
            <Link color="inherit" style={{ color: "#fc5296", textDecoration: "none" }}>
                Code of duty &nbsp;
            </Link>
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();

const Signup = () => {
    // definition
    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );

    const drawerWidth = 240;

    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(9)} + 1px)`,
        },
    });

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));


    const history = useHistory();
    const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const [values, setValues] = React.useState({
        name: "",
        password: "",
        password2: "",
        email: "",
    });

    const [teacher, setRole] = React.useState(false);
    const [passwordShow, setpassword] = React.useState(false);
    const [passwordShow2, setpassword2] = React.useState(false);

    //   functions
    const handleChanges = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        console.log(values);
    };
    var data = new FormData();
    data.append("teaaccher", `${teacher}`);
    data.append("password", `${values.password}`);
    data.append("email", `${values.email}`);
    var config = {
        method: "post",
        url: "http://b5da-1-22-101-132.ngrok.io/account/signup/",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));


    const ValidationTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#fc5296',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fc5296',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#fc5296',
                borderWidth: '2px',
            },
            '&:hover fieldset': {
                // borderColor: 'green',
            },

        },
    });
    return (
        <ThemeProvider theme={theme}>
            {/* <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} color='transparent' elevation={0}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <ChevronRightIcon />
                        </IconButton>
                    </Toolbar>
                    </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {['SignUp', 'Login'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['ContactUs', 'FAQS'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader /> */}
            <Grid
                container
                component="main"
                sx={{ height: "100vh" }}
            // style={{ padding: "10px 50px" }}
            >
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    padding={3}
                    sx={{
                        backgroundImage: `url(${chart})`,
                        backgroundRepeat: "no-repeat",
                        // backgroundColor: (t) =>
                        //     t.palette.mode === "light"
                        //         ? t.palette.grey[50]
                        //         : t.palette.grey[900],
                        backgroundSize: "700px",
                        // backgroundPosition: "center",
                    }}
                />
                <Grid item xs={12} sm={8} md={5} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >

                        <Typography component="h1" variant="h5" style={{padding:'2%',fontSize:'2rem',fontWeight:'700'}}>
                            Create Account 
                        </Typography>

                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                                password2: "",
                                name: "",
                                fname: "",
                                lname: "",
                                subject: "",
                                message: "",
                                showPassword: false,
                            }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.password) {
                                    errors.password = "Password is required";
                                } else if (values.password.length < 8) {
                                    errors.password = "Password is too short";
                                } else if (!passwordRegex.test(values.password)) {
                                    errors.password = "Password is not strong enough";
                                }
                                if (!values.password2) {
                                    errors.password2 = "Password is required";
                                } else if (values.password !== values.password2) {
                                    errors.password2 = "Password doesn't match";
                                }
                                if (!values.email) {
                                    errors.email = "Email is required";
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = "Invalid email address";
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <Box
                                    component="form"
                                    onSubmit={handleSubmit}
                                    noValidate
                                    sx={{ mt: 1 }}
                                >
                                    <ValidationTextField
                                        id="outlined-basic"
                                        label="Email"
                                        color="primary"
                                        type="email"
                                        // error={errors.email}
                                        name="email"
                                        required
                                        variant="outlined"
                                        value={values.email}
                                        fullWidth
                                        autoComplete="off"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <EmailIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        onBlur={handleBlur}
                                        onChange={(event) => {
                                            handleChange(event);
                                            handleChanges(event);
                                        }}
                                    />
                                    {touched.email && errors.email ? (
                                        <FormHelperText error>{errors.email}</FormHelperText>
                                    ) : <FormHelperText style={{ visibility: "hidden" }}>
                                        ..
                                    </FormHelperText>}

                                    <br />
                                    <Grid container spacing={2}>
                                        <Grid item md={6} sm={12} xs={12}>
                                            <Tooltip
                                                title="Minimum eight characters, at least one letter, one number and one special character are required"
                                                arrow
                                            >
                                                <ValidationTextField
                                                    label="password"
                                                    color="primary"
                                                    type={passwordShow ? "text" : "password"}
                                                    // error={errors.password}
                                                    required
                                                    variant="outlined"
                                                    value={values.password}
                                                    name="password"
                                                    fullWidth
                                                    // onChange={handleChanges}

                                                    onChange={(event) => {
                                                        handleChange(event);
                                                        handleChanges(event);
                                                    }}
                                                    autoComplete="off"
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onMouseDown={(e) => e.preventDefault()}
                                                                    edge="end"
                                                                    onClick={() => {
                                                                        setpassword(!passwordShow);
                                                                    }}
                                                                >
                                                                    {passwordShow ? (
                                                                        <VisibilityOff />
                                                                    ) : (
                                                                        <Visibility />
                                                                    )}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </Tooltip>
                                            {errors.password ? (
                                                <FormHelperText error>{errors.password}</FormHelperText>
                                            ) : (
                                                <FormHelperText style={{ visibility: "hidden" }}>
                                                    ..
                                                </FormHelperText>
                                            )}

                                        </Grid>
                                        <Grid item md={6} sm={12} xs={12}>
                                            <ValidationTextField
                                                label="Confirm password"
                                                color="primary"
                                                type={passwordShow2 ? "text" : "password"}
                                                // error={errors.password2}
                                                required
                                                variant="outlined"
                                                value={values.password2}
                                                name="password2"
                                                fullWidth
                                                // onChange={handleChanges}

                                                onChange={(event) => {
                                                    handleChange(event);
                                                    handleChanges(event);
                                                }}
                                                autoComplete="off"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onMouseDown={(e) => e.preventDefault()}
                                                                edge="end"
                                                                onClick={() => {
                                                                    setpassword2(!passwordShow2);
                                                                }}
                                                            >
                                                                {passwordShow2 ? (
                                                                    <VisibilityOff />
                                                                ) : (
                                                                    <Visibility />
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            {errors.password2 ? (
                                                <FormHelperText error>
                                                    {errors.password2}
                                                </FormHelperText>
                                            ) : (
                                                <FormHelperText style={{ visibility: "hidden" }}>
                                                    ..
                                                </FormHelperText>
                                            )}
                                        </Grid>
                                        <br />
                                        <br />
                                        <br />
                                        {/* <FormControl
                                                    style={{
                                                        width: "490px",
                                                        transform: "translateX(17px)",
                                                        margin: "5px",
                                                    }}
                                                    fullWidth
                                                >
                                                    <InputLabel id="demo-simple-select-label">
                                                        Role
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={teacher}
                                                        label="Role"
                                                        onChange={(e) => setRole(e.target.value)}
                                                    >
                                                        <MenuItem value={true}>Teacher</MenuItem>
                                                        <MenuItem value={false}>Student</MenuItem>
                                                    </Select>
                                                </FormControl> */}
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        style={{
                                            fontSize: "1.1rem", backgroundColor: '#fc5296', width: '500px',
                                            backgroundImage: 'linear-gradient(315deg, #fc5296 0%, #f67062 74%)',
                                            fontWeight: '700'
                                        }}
                                        component={motion.div}
                                        whileHover={{
                                            scale: 1.08,
                                            backgroundColor: "#2888ff",
                                            textShadow: "0 0 8px rgb(255,255,255)",
                                            transition: { duration: 0.3 },
                                        }}
                                        onClick={(e) => {
                                            console.log(errors);
                                            console.log(teacher);
                                            if (
                                                !errors.email &&
                                                !errors.password &&
                                                !errors.password2
                                            ) {
                                                axios(config)
                                                    .then(function (response) {
                                                        console.log(JSON.stringify(response.data));
                                                        Swal.fire({
                                                            icon: "success",
                                                            title: "Email verfication",
                                                            text: "Link is sent to your mail",
                                                            showClass: {
                                                                popup: "animate__animated animate__fadeInDown",
                                                            },
                                                            hideClass: {
                                                                popup: "animate__animated animate__fadeOutUp",
                                                            },
                                                        });
                                                        // history.push("/home");
                                                    })
                                                    .catch(function (error) {
                                                        console.log(error);
                                                        Swal.fire({
                                                            icon: "error",
                                                            title: "Invalid",
                                                            text: "Please try again ",
                                                            showClass: {
                                                                popup: "animate__animated animate__fadeInDown",
                                                            },
                                                            hideClass: {
                                                                popup: "animate__animated animate__fadeOutUp",
                                                            },
                                                        });
                                                    });
                                            }
                                        }}
                                    >
                                        Sign Up
                                    </Button>
                                    <Grid container>
                                        <Grid item xs={12} md={12}>
                                            <div

                                                // color="primary"
                                                variant="outlined"
                                                fullWidth
                                                style={{ marginBottom: "3vh",color: "#fc5296" }}
                                                component={motion.div}
                                                whileHover={{
                                                    scale: 1.08,
                                                    textShadow: "0 0 8px rgb(255,255,255)",
                                                    transition: { duration: 0.3 },
                                                }}
                                            >
                                                <Link
                                                    to="/login"
                                                    style={{
                                                        textDecoration: "none",
                                                        fontSize: "1rem",
                                                        color: "#fc5296"
                                                    }}
                                                >
                                                    Have an account? Login
                                                </Link>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Copyright sx={{ mt: 5 }} />
                                </Box>
                            )}
                        </Formik>
                    </Box>
                </Grid>
            </Grid>
            {/* </Box> */}
            {/* // </Box> */}
        </ThemeProvider>
    );
};

export default Signup;
