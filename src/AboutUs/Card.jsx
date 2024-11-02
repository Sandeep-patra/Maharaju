import React, { useEffect, useRef, useState } from "react";
import "./card.css";

const FourCards = () => {
    const cardData = [
        { 
            title: "Our Vision", 
            content: "To be a proactive, trusted technology partner that propels Maharaju IT Department towards a future of digital excellence and resilience.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/digital-core.png",
            bgColor: "four-card-bg-orange"
        },
        { 
            title: "Infrastructure Management", 
            content: "We manage and maintain the networks, servers, and devices that keep us connected and operational.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/digital-operating.png",
            bgColor: "four-card-bg-blue"
        },
        { 
            title: "Cybersecurity", 
            content: "We protect the organization’s data and systems from cyber threats with robust security measures and continuous monitoring.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/talent-transformation.png",
            bgColor: "four-card-bg-pink"
        },
        { 
            title: "Software Development", 
            content: "We design, develop, and maintain custom software solutions tailored to our organization’s unique needs.", 
            image: "https://www.infosys.com/content/dam/infosys-web/en/about/images/new-possibilities.png",
            bgColor: "four-card-bg-red"
        }
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
        <div className="four-cards-container">
            <h1 className="four-cards-title">What We Do</h1>
            <div className="four-cards-grid">
                {cardData.map((card, index) => (
                    <div
                        ref={(el) => (cardRefs.current[index] = el)}
                        className={`four-card ${isVisible[index] ? "visible" : ""} ${card.bgColor}`}
                        key={index}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        <h2 className="four-card-title">{card.title}</h2>
                        <p className="four-card-content">{card.content}</p>
                        {card.image && (
                            <img src={card.image} alt={card.title} className="four-card-image" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FourCards;
