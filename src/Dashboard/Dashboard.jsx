import { Card } from '@mui/material'
import React from 'react'
import Examples from '../Accounts/Examples'
import Footer from './footer'
import Hero from './Hero'
import Publicity from './Publicity'
import Specs from './Specs'
import Sport from './Sports'

const Dashboard = () => {
    return (
        <Card>
        
            <Hero />
            <Specs/>
            <Sport/>
            <Examples/>
            <Publicity/>
            <Footer/>
        </Card>
    )
}

export default Dashboard