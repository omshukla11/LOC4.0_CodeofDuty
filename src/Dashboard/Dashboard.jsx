import { Card } from '@mui/material'
import React from 'react'
import Examples from '../Accounts/Examples'
import Footer from './footer'
import Hero from './Hero'
import Publicity from './Publicity'
import Specs from './Specs'
import Sport from './Sports'
import { useEffect } from "react";


const Dashboard2 = () => {
    const onTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        onTop();
    }, []);
    return (
        <Card style={{ transform: 'translateY(-32px)' }} >
            <Hero />
            <Specs />
            <Sport />
            <Publicity />
            <Examples />
            <Footer />
        </Card >
    )
}

export default Dashboard2