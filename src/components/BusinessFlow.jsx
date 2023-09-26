import React from 'react'
import "./BusinessFlow.css"
import vid from "../assets/video.mp4";

function BusinessFlow() {
    return (
        <>
            <div className="business-flow">
                <h3>Business Flow</h3>
                <h6>Our Process</h6>
                <video class="video-container w-75" poster="https://www.linnseed.com/front_assets/HomeResource/img/Temp/Web%20banner.png" playsinline="" autoplay="true" muted="" loop="">
                    <source src={vid} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default BusinessFlow