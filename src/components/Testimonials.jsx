import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Testimonials.css";

function Testimonials() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className="testimonials">
                <h3 >Testimonial</h3>
                <h6 style={{ marginBottom: '50px' }}>One of the best marketplace for cotton Industry</h6>

                <Carousel
                    responsive={responsive}
                    className='carousell'
                    autoPlay={true}
                    autoPlaySpeed={1000} // Adjust the speed as needed (in milliseconds)
                    infinite={true}
                >
                    <div className="testimonial-card">
                        <p>Raghunath Export</p>
                        <p>
                            ❝ The cotton industry can be complex and overwhelming, but Linnseed makes it easy. They know the ins and outs of the business and have helped us navigate everything from pricing to shipping logistics. ❞
                        </p>
                        <hr />
                        <p>Virendra Venkayya</p>
                        <div className="icons-group" style={{ display: 'flex' }}>
                        <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                         </div>

                    </div>
                    <div className="testimonial-card">
                        <p>Raghunath Export</p>
                        <p>
                            ❝ The cotton industry can be complex and overwhelming, but Linnseed makes it easy. They know the ins and outs of the business and have helped us navigate everything from pricing to shipping logistics. ❞
                        </p>
                        <hr />
                        <p>Virendra Venkayya</p>
                        <div className="icons-group" style={{ display: 'flex' }}>
                        <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                        </div>

                    </div>
                    <div className="testimonial-card">
                        <p>Raghunath Export</p>
                        <p>
                            ❝ The cotton industry can be complex and overwhelming, but Linnseed makes it easy. They know the ins and outs of the business and have helped us navigate everything from pricing to shipping logistics. ❞
                        </p>
                        <hr />
                        <p>Virendra Venkayya</p>
                        <div className="icons-group" style={{ display: 'flex' }}>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                        </div>

                    </div>
                    <div className="testimonial-card">
                        <p>Raghunath Export</p>
                        <p>
                            ❝ The cotton industry can be complex and overwhelming, but Linnseed makes it easy. They know the ins and outs of the business and have helped us navigate everything from pricing to shipping logistics. ❞
                        </p>
                        <hr />
                        <p>Virendra Venkayya</p>
                        <div className="icons-group" style={{ display: 'flex' }}>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                        </div>

                    </div>
                    <div className="testimonial-card">
                        <p>Raghunath Export</p>
                        <p>
                            ❝ The cotton industry can be complex and overwhelming, but Linnseed makes it easy. They know the ins and outs of the business and have helped us navigate everything from pricing to shipping logistics. ❞
                        </p>
                        <hr />
                        <p>Virendra Venkayya</p>
                        <div className="icons-group" style={{ display: 'flex' }}>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                        </div>

                    </div>
                    <div className="testimonial-card">
                        <p>Raghunath Export</p>
                        <p>
                            ❝ The cotton industry can be complex and overwhelming, but Linnseed makes it easy. They know the ins and outs of the business and have helped us navigate everything from pricing to shipping logistics. ❞
                        </p>
                        <hr />
                        <p>Virendra Venkayya</p>
                        <div className="icons-group" style={{ display: 'flex' }}>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                        </div>

                    </div>
                    <div className="testimonial-card">
                        <p>Raghunath Export</p>
                        <p>
                            ❝ The cotton industry can be complex and overwhelming, but Linnseed makes it easy. They know the ins and outs of the business and have helped us navigate everything from pricing to shipping logistics. ❞
                        </p>
                        <hr />
                        <p>Virendra Venkayya</p>
                        <div className="icons-group" style={{ display: 'flex' }}>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                        </div>

                    </div>
                    <div className="testimonial-card">
                        <p>Raghunath Export</p>
                        <p>
                            ❝ The cotton industry can be complex and overwhelming, but Linnseed makes it easy. They know the ins and outs of the business and have helped us navigate everything from pricing to shipping logistics. ❞
                        </p>
                        <hr />
                        <p>Virendra Venkayya</p>
                        <div className="icons-group" style={{ display: 'flex' }}>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                            <i class="ri-star-fill" style={{ color: 'goldenrod' }}></i>
                        </div>

                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Testimonials