import { Card } from '@mui/material'
import React from 'react'
import Footer from './footer'
import Hero from './Hero'
import Publicity from './Publicity'
import Specs from './Specs'

const Dashboard = () => {
    return (
        <Card>
        
            <Hero />
            <Publicity/>
            <Specs/>
            <Footer/>
        </Card>
    )
}

export default Dashboard