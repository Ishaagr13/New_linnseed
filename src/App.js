import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import About from './components/About'
import BusinessFlow from './components/BusinessFlow'
import Blog from './components/Blog'
import FacebookAds from './components/FacebookAds'
import Testimonials from './components/Testimonials'
import HomePage from './Pages/HomePage'
import ForBuyersPage from './Pages/ForBuyersPage'
import ForSellerPage from './Pages/ForSellerPage'
import BlogPage from './Pages/BlogPage'
import SigninPage from './Pages/SigninPage'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} index />
          <Route path="/header" element={<Header />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path="/card" element={<Card />} />
          <Route path="/about" element={<About />} />
          <Route path="/facebookads" element={<FacebookAds />} />
          <Route path="/business" element={<BusinessFlow />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />

          {/* Pages Routing  */}
          <Route path="/forbuyers" element={<ForBuyersPage />} />
          <Route path="/forsellers" element={<ForSellerPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/signin" element={<SigninPage />} />

        </Routes>
      </BrowserRouter>

      <Footer/>
    </>

  )
}

export default App