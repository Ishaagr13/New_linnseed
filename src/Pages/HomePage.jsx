import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import About from '../components/About'
import BusinessFlow from '../components/BusinessFlow'
import Blog from '../components/Blog'
import FacebookAds from '../components/FacebookAds'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'

function HomePage() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Home/>
            <Card/>
            <About/>
            <FacebookAds/>
            <BusinessFlow/>
            <Blog/>
            <Testimonials/>
            <Contact/>
        </>
    )
}

export default HomePage