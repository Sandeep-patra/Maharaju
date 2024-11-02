import React, { useEffect, useRef, useState } from "react";
import "./scndcard.css";

const ThreeCards = () => {
    const cardData = [
        { 
            title: "Data Management", 
            content: "We provide insights through data analysis and ensure data integrity for informed decision.",
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/iki-thumbnail.png",
            bgColor: "green-bg"
        },
        { 
            title: "User Support", 
            content: "We offer responsive technical support to ensure our colleagues can work efficiently and without interruption.",
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/innovation-fund-thumbnail.png",
            bgColor: "red-bg"
        },
        { 
            title: "Help Desk & Technical Support", 
            content: "Our support team ensures that our users receive prompt assistance and guidance.",
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/innovation-network-thumbnail.png",
            bgColor: "yellow-bg"
        },
    ];

    const [isVisible, setIsVisible] = useState(Array(cardData.length).fill(false));
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => {
                            const updatedVisibility = [...prev];
                            updatedVisibility[index] = true;
                            return updatedVisibility;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            cardRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="container">
            <div className="card-grid">
                {cardData.map((card, index) => (
                    <div
                        ref={(el) => (cardRefs.current[index] = el)}
                        className={`card ${isVisible[index] ? "visible" : ""}`}
                        key={index}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <div className={`card-content ${card.bgColor}`}>
                            <span className="circular-hover" />
                            <h2 className="card-title">{card.title}</h2>
                            <p className="card-text">{card.content}</p>
                            {card.image && (
                                <img 
                                    src={card.image} 
                                    alt={card.title} 
                                    className="card-image"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThreeCards;
