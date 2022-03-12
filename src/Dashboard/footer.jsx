import { Container, Grid } from "@mui/material";
import React from "react";
import image from "../Images/running.png";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link } from "react-scroll";
import './Basic.css'
const Footer = (mode) => {
    const pages = [
        "Dashboard",
        "Profile",
        "Feedback",
        "Events",
        //   "FAQS",
        "Contact Us"
    ];
    return (
        <Container
            style={{
                paddingTop: "20px",
                // color: "white",
            }}
        >
            <center>
                <Grid container className="locNav" spacing={3}>
                    <Grid item sm={3} xs={12}>
                        <p>ABOUT US</p>
                        {mode.mode == 'dark' ?
                            <img
                                width="120"
                                src={image}
                                alt="logo"
                                style={{ transform: "translateX(-10px)",filter:'invert(1)' }}
                            ></img> : <img
                                width="120"
                                src={image}
                                alt="logo"
                                style={{ transform: "translateX(-10px)" }}
                            ></img>}
      `                  {/* <img
                            width="120"
                            src={image}
                            alt="logo"
                            style={{ transform: "translateX(-10px)" }}
                        ></img>` */}
                        <h6 className="aboutFooter">
                            “I’d rather regret the risks that didn’t work out than the chances I didn’t take at all.”
                        </h6>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <p>Navigation</p>
                        <Grid container spacing={3}>
                            {pages.map(x => {
                                return (
                                    <Grid item xs={6} style={{ cursor: "pointer" }}>
                                        <Link
                                            to={x}
                                            spy={true}
                                            smooth={true}
                                            style={{
                                                fontSize: ".9rem",
                                                padding: "4% 1%",
                                                cursor: "pointer",
                                                fontWeight: "400",
                                            }}
                                        >
                                            {/* <BiRightArrow></BiRightArrow> */}
                                            {x}
                                        </Link>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <p>Location</p>
                        <h6 className="locationData">
                            No. U, 15, Bhaktivedanta Swami Rd, opp. Cooper Hospital, JVPD
                            Scheme, Vile Parle, Mumbai, Maharashtra 400056 .India
                        </h6>
                        <a
                            style={{ textDecoration: "none" }}
                            rel="noreferrer"
                            href="mailto:coreacm@gmail.com"
                            target="_blank"
                        >
                            {" "}
                            <h6 className="locationMail">omshukla@gmail.com</h6>
                        </a>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <p>Follow us</p>
                        <a
                            href="#"
                            rel="noreferrer"
                        >
                            <BsInstagram />
                        </a>
                        <a
                            href="#"
                            rel="noreferrer"
                        >
                            <BsFacebook />
                        </a>
                        <a
                            href="#"
                            rel="noreferrer"
                        >
                            <BsLinkedin />
                        </a>
                    </Grid>
                </Grid>
                <h4 style={{ padding: "0 0 1.5% 0" }}>
                    Made with <span style={{ color: "red" }}>❤</span> from Skills Up
                </h4>
            </center>
        </Container>
    );
};

export default Footer;
