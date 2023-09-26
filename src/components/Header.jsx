import React from 'react'
import "./Header.css";

function Header() {
    return (
        <>
            <nav className="navbar bg-body-white" style={{ backgroundColor: 'white' }}>
                <div className="container" >
                    <img src="https://www.linnseed.com/front_assets/HomeResource/logo.png" className="img-fluid logo" width="120px" />
                    <form className="d-flex" style={{ width: '500px', justifyContent: 'space-around' }}>
                        <div className="contact-us" >
                            <img src="https://www.linnseed.com/front_assets/HomeResource/img/icon/call.png" width="50px" height="40px" />
                            <div className="content">
                                <p style={{fontSize:'16px',fontFamily:'sans-serif'}}>Contact Us</p>
                                <h6>+91 9111361111</h6>
                            </div>
                        </div>

                        <div className="contact-us" >
                            <img src="https://www.linnseed.com/front_assets/HomeResource/img/icon/email.png"width="50px" height="40px" />
                            <div className="content">
                                <p style={{fontSize:'16px',fontFamily:'sans-serif'}}>Send Email</p>
                                <h6>Sales@linnseed.com</h6>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header