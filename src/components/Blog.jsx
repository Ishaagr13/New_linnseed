import React from 'react'
import "./Blog.css"
import logo from ".././assets/logo.png"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from 'reactstrap'

function Blog() {
    return (
        <>
            <div className="blog">
                <h4>BLOG</h4>
                <div className="blog-cards">

                    <div className="cardy1" >
                        {/* Card No. 1 */}
                        <Card
                            style={{
                                width: '22rem',
                                borderRadius: '1px',
                                padding: '0px 15px'
                            }}
                        >
                            <div className="top-logo-content">
                                <img src={logo} alt="logoImg" width="50px" />
                                <div className="content-linnseed">
                                    <h6 >Linnseed</h6>
                                    <p style={{ color: 'gray' }}>10/07/2023 12:33pm</p>
                                </div>
                            </div>
                            <CardBody>
                                <CardText>On Sunday, a significant breach in the Malukpura minor (sub-canal) submerged 600 acres of cotton plantations.</CardText>
                                <button className='btn-viewall'>Read More</button>
                            </CardBody>
                        </Card>
                        {/* Card No. 2 */}
                        <Card
                            style={{
                                width: '22rem',
                                borderRadius: '1px',
                                padding: '0px 15px'
                            }}
                        >
                            <div className="top-logo-content">
                                <img src={logo} alt="logoImg" width="50px" />
                                <div className="content-linnseed">
                                    <h6 >Linnseed</h6>
                                    <p style={{ color: 'gray' }}>10/07/2023 12:33pm</p>
                                </div>
                            </div>
                            <CardBody>
                                <CardText>On Sunday, a significant breach in the Malukpura minor (sub-canal) submerged 600 acres of cotton plantations.</CardText>
                                <button className='btn-viewall'>Read More</button>
                            </CardBody>
                        </Card>
                        {/* Card No. 3 */}
                        <Card
                            style={{
                                width: '22rem',
                                borderRadius: '1px',
                                padding: '0px 15px'
                            }}
                        >
                            <div className="top-logo-content">
                                <img src={logo} alt="logoImg" width="50px" />
                                <div className="content-linnseed">
                                    <h6 >Linnseed</h6>
                                    <p style={{ color: 'gray' }}>10/07/2023 12:33pm</p>
                                </div>
                            </div>
                            <CardBody>
                                <CardText>On Sunday, a significant breach in the Malukpura minor (sub-canal) submerged 600 acres of cotton plantations.</CardText>
                                <button className='btn-viewall'>Read More</button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <button className='btn-viewall'>View All</button>
            </div>
        </>
    )
}

export default Blog