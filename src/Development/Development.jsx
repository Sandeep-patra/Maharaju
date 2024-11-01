import React, { useState } from "react";
import './develop.css';

function Development() {
    const [activeCard, setActiveCard] = useState(null);

    const cardsData = [
        { id: 1, title: "Website Design", text: "Our Website designers craft visually appealing, user-friendly layouts and interfaces, focusing on aesthetics, usability, and brand alignment. Our team blends design with digital tools.", icon: "fa-display" },
        { id: 2, title: "Web Development", text: "Web development involves creating and maintaining websites, ensuring seamless performance, user-friendly design, and robust functionality.", icon: "fa-file" },
        { id: 3, title: "E-commerce", text: "Enabling seamless online transactions with secure, scalable, and user-friendly solutions, driving digital business growth and customer engagement.", icon: "fa-cart-shopping" },
        { id: 4, title: "Domain and Hosting", text: "Domain refers to your website's unique address, while hosting is the service that stores your website files and makes them accessible online.", icon: "fa-address-card" },
        { id: 5, title: "Website Redesign", text: "Website redesign revamps a site's structure, visuals, and functionality to enhance user experience and align with evolving brand goals.", icon: "fa-desktop" },
        { id: 6, title: "Website Maintenance", text: "Website Management ensures seamless performance, updates, and security of a site, keeping it user-friendly and up-to-date.", icon: "fa-user" },
    ];

    const handleMouseEnter = (id) => setActiveCard(id);
    const handleMouseLeave = () => setActiveCard(null);

    return (
        <div>
            <div className="header-section">
                <img src="https://e1.pxfuel.com/desktop-wallpaper/943/330/desktop-wallpaper-laptop-black-keyboard-backgrounds-cool-computer-keyboard-thumbnail.jpg" alt="Header" className="header-image" />
                <div className="header-text">
                    <div className="development">Development</div>
                    <div className="mt-3">
                        Home / Development
                    </div>
                </div>
            </div>

            <div className="responsive-section">
                <img src="https://ilandertech.com/assets/images/about/web.png" alt="Web Development" className="responsive-img" />
                <div className="text-section">
                    <h2>Web Design & Development</h2>
                    <p>
                        Our expertise in web development empowers businesses with highly functional, user-centered solutions. We focus on scalability, security, and seamless performance to support your digital growth.
                    </p>
                </div>
            </div>

            <div className="feature-grid">
                {cardsData.map((card) => (
                    <div
                        key={card.id}
                        className={`feature-card ${activeCard === card.id ? "active" : ""}`}
                        onMouseEnter={() => handleMouseEnter(card.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="feature-card-body">
                            <div className="feature-card-header">
                                <i className={`fa-solid ${card.icon} feature-icon`} aria-hidden="true"></i>
                                <h5>{card.title}</h5>
                            </div>
                            <p>{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Development;
