import React, { useState, useEffect } from 'react';
import './section.css';

function Section() {
    const [activeContent, setActiveContent] = useState('home');
    const [counts, setCounts] = useState({ count1: 0, count2: 0, count3: 0 })

    const contentMap = {
        home: "Our mission is to provide top-notch IT services, including web development, mobile app development, and custom software solutions, to help our clients succeed in the digital world.",
        vision: "Our vision is to be a leading IT service provider, recognized for our innovative solutions and commitment to customer satisfaction.",
        value: "Our values are centered around quality, collaboration, and continuous improvement, ensuring we deliver the best results for our clients."
    };

    // Function to handle icon clicks
    function handleIconClick(contentKey) {
        setActiveContent(contentKey);
    }

    useEffect(() => {
        const targets = { count1: 100, count2: 23, count3: 3 };
        const timer = setInterval(() => {
            setCounts(prevCounts => {
                const newCounts = { ...prevCounts };
                let completed = true;
                for (const key in targets) {
                    if (newCounts[key] < targets[key]) {
                        newCounts[key]++;
                        completed = false;
                    }
                }
                if (completed) clearInterval(timer);
                return newCounts;
            });
        }, 20);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='section'>
            <div>
                <img src="https://ilandertech.com/assets/images/about.jpg" alt="About Maharju" />
            </div>
            <div>
                <h3>ABOUT MAHARAJU</h3>
                <div>
                    iLander Technologies was founded by a group of experienced digital marketers 8 years ago to emerge as one of the best digital marketing agencies. Apart from digital marketing services, a wide spectrum of website design and development services will also be provided for our clients.
                </div>
                <div className='content-container'>
                    <div className='icon-container'>
                        <div onClick={() => handleIconClick('home')} className='me-2'><span className='fa-solid fa-home me-2'></span>Our Mission</div>
                        <div onClick={() => handleIconClick('vision')}><span className='fa-solid fa-user me-2'></span>Our Vision</div>
                        <div onClick={() => handleIconClick('value')}><span className='fa-solid fa-envelope me-2'></span>Our Value</div>
                    </div>
                    <div className='section-content'>
                        <p>{contentMap[activeContent]}</p>
                    </div>
                    <div className='count-section'>
                        <div className="count">
                        <div>{counts.count1}</div>
                        <div> Projects Completed</div>
                        </div>
                        <div className="count">
                        <div>{counts.count2}</div>
                        <div> Happy Clients</div>
                        </div>
                        <div className="count">
                        <div>{counts.count3}</div>
                        <div> Awards Won</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
