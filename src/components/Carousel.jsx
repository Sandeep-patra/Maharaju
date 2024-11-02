// Carousel.js
import React from 'react';
import './header.css';

function CarouselSection() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="sss.avif" alt="First slide" />
                    <div className="carousel-content">
                        <h1>Welcome To Maharaju Healthcare</h1>
                        <div>Maharaju Health care can help you build better applications using the open source framework</div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="secondc.jpg" alt="Second slide" />
                    <div className="carousel-content">
                        <h1>Welcome To Maharaju Healthcare</h1>
                        <div>Maharaju Health care can help you build better applications using the open source framework</div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="thirdc.jpg" alt="Third slide" />
                    <div className="carousel-content">
                        <h1>Welcome To Maharaju Healthcare</h1>
                        <div>Maharaju Health care can help you build better applications using the open source framework</div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselSection;
