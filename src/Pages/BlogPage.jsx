import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Common from '../components/Common'
import img1 from "../assets/img1.jpg"
import "./Blogpages.css"

function BlogPage() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="blogpage-card">
                <div className="image-blogpage">
                <img src={img1} alt="image1" width ="100%"/>
                </div>
                <div className="content-right-blogpage">
                    <h2>Cotton Rallies On Tuesday</h2>
                    <p>
                        Cotton Rallies On Tuesday
                        On Tuesday, cotton futures gained between 104 and 300 points and closed near their highs. The Dec contract then settled at its highest price since May 23rd. </p>
                    <br /> <br />
                    <p>The Dollar Index on Tuesday</p>
                    <p>12-07-2023 10:43 AM</p>
                    <button className='btn-readmore' style={{backgroundColor:'#AC7E64'}}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default BlogPage