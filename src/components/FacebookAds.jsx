import React from 'react'
import "./FacebookAds.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function FacebookAds() {

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
            <div className="facebook-ads">
                <h3 >Facebook</h3>
                <h6>Join our Facebook community for daily updates</h6>

                <Carousel
                    responsive={responsive}
                    className='carousel'
                    autoPlay={true}
                    autoPlaySpeed={1000} // Adjust the speed as needed (in milliseconds)
                    infinite={true}
                >
                    <div className='fb-ads'><img src="https://scontent.fbho5-1.fna.fbcdn.net/v/t39.30808-6/358611558_723823979752413_456892619168008288_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=dpWCMY1oxYIAX_PTBu1&_nc_ht=scontent.fbho5-1.fna&oh=00_AfDl02u4IjOApy_KSp8dX6xhAEHn7a3ny2Rnj49BK0qP_w&oe=64B125BD" alt="image" width="300" /></div>
                    <div className='fb-ads'><img src="https://scontent.fbho5-1.fna.fbcdn.net/v/t39.30808-6/358611558_723823979752413_456892619168008288_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=dpWCMY1oxYIAX_PTBu1&_nc_ht=scontent.fbho5-1.fna&oh=00_AfDl02u4IjOApy_KSp8dX6xhAEHn7a3ny2Rnj49BK0qP_w&oe=64B125BD" alt="image" width="300" /></div>
                    <div className='fb-ads'><img src="https://scontent.fbho5-1.fna.fbcdn.net/v/t39.30808-6/358611558_723823979752413_456892619168008288_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=dpWCMY1oxYIAX_PTBu1&_nc_ht=scontent.fbho5-1.fna&oh=00_AfDl02u4IjOApy_KSp8dX6xhAEHn7a3ny2Rnj49BK0qP_w&oe=64B125BD" alt="image" width="300" /></div>
                    <div className='fb-ads'><img src="https://scontent.fbho5-1.fna.fbcdn.net/v/t39.30808-6/358611558_723823979752413_456892619168008288_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=dpWCMY1oxYIAX_PTBu1&_nc_ht=scontent.fbho5-1.fna&oh=00_AfDl02u4IjOApy_KSp8dX6xhAEHn7a3ny2Rnj49BK0qP_w&oe=64B125BD" alt="image" width="300" /></div>
                    <div className='fb-ads'><img src="https://scontent.fbho5-1.fna.fbcdn.net/v/t39.30808-6/358611558_723823979752413_456892619168008288_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=dpWCMY1oxYIAX_PTBu1&_nc_ht=scontent.fbho5-1.fna&oh=00_AfDl02u4IjOApy_KSp8dX6xhAEHn7a3ny2Rnj49BK0qP_w&oe=64B125BD" alt="image" width="300" /></div>
                    <div className='fb-ads'><img src="https://scontent.fbho5-1.fna.fbcdn.net/v/t39.30808-6/358611558_723823979752413_456892619168008288_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=dpWCMY1oxYIAX_PTBu1&_nc_ht=scontent.fbho5-1.fna&oh=00_AfDl02u4IjOApy_KSp8dX6xhAEHn7a3ny2Rnj49BK0qP_w&oe=64B125BD" alt="image" width="300" /></div>
                    <div className='fb-ads'><img src="https://scontent.fbho5-1.fna.fbcdn.net/v/t39.30808-6/358611558_723823979752413_456892619168008288_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=dpWCMY1oxYIAX_PTBu1&_nc_ht=scontent.fbho5-1.fna&oh=00_AfDl02u4IjOApy_KSp8dX6xhAEHn7a3ny2Rnj49BK0qP_w&oe=64B125BD" alt="image" width="300" /></div>
                </Carousel>
            </div>
        </>
    )
}

export default FacebookAds