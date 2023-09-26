import React from 'react'
import "./Card.css";

function Card() {
    return (
        <>
            <div className="card-box">
                <div className="card1">
                    <img src="https://www.linnseed.com/front_assets/HomeResource/img/icon/Cotton.png" width="140px" />
                    <h4>Cotton Bales</h4>
                </div>
                <div className="card1">
                    <img src="https://www.linnseed.com/front_assets/HomeResource/img/icon/Organi_Cotton.png" width="130px" />
                    <h4>Organic Cotton</h4>
                </div>
                <div className="card1">
                    <img src="https://www.linnseed.com/front_assets/HomeResource/img/icon/Yarn.png" width="130px"/>
                    <h4>Yarn</h4>
                </div>
            </div>
        </>
    )
}

export default Card