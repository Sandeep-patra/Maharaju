import React from 'react';
import './services.css';

const ServicePage = () => {
    const services = [
        { title: 'Web Development', description: 'Front-end and back-end development with modern frameworks and CMS solutions.', icon: 'fa-solid fa-code', details: ["Front-end technologies like HTML5, CSS3, JavaScript, and popular frameworks like React, Angular, or Vue.js.", "Back-end technologies like Node.js, Django, Ruby on Rails, Python, SpringBoot(Java), or .NET.", "Content Management Systems (CMS) like WordPress, Drupal, or Joomla."] },
        { title: 'Mobile Development', description: 'iOS and Android development, as well as cross-platform solutions.', icon: 'fa-solid fa-mobile-alt', details: ["iOS development using Swift or Objective-C.", "Android development using Java or Kotlin.", "Cross-platform development using frameworks like React Native, Flutter, or Xamarin."] },
        { title: 'Cloud Solutions', description: 'Secure and scalable hosting and cloud infrastructure.', icon: 'fa-solid fa-cloud', details: ["Hosting solutions like AWS, Google Cloud Platform, and Microsoft Azure.", "Cloud infrastructure management and deployment using Docker and Kubernetes."] },
        { title: 'Database Management', description: 'Comprehensive management of SQL and NoSQL databases.', icon: 'fa-solid fa-database', details: ["SQL databases (MySQL, PostgreSQL, MS SQL) or NoSQL databases (MongoDB, Cassandra, Redis)."] },
        { title: 'AI and Machine Learning', description: 'Tailored AI solutions for business needs.', icon: 'fa-solid fa-robot', details: ["Development using Python and libraries/frameworks like TensorFlow, PyTorch, or Scikit-learn.", "Bot development tailored to your organization utilizing LLM, llama2, and OpenAI."] },
        { title: 'Cybersecurity', description: 'Application and network security solutions.', icon: 'fa-solid fa-lock', details: ["Services for securing applications and networks, using tools like firewalls, encryption, and intrusion detection systems."] },
        { title: 'UI/UX Design', description: 'Creating intuitive and user-friendly interfaces.', icon: 'fa-solid fa-paint-brush', details: ["Design tools like Dribbble, Adobe XD, Sketch, Figma for creating user-friendly interfaces."] },
        { title: 'DevOps', description: 'CI/CD pipelines for streamlined development.', icon: 'fa-solid fa-cog', details: ["Continuous Integration/Continuous Deployment (CI/CD) using tools like Jenkins, GitLab CI, or GitHub Actions."] },
        { title: 'E-commerce Solutions', description: 'Comprehensive e-commerce platform implementation.', icon: 'fa-solid fa-shopping-cart', details: ["Implementing e-commerce platforms like Shopify, Magento, or WooCommerce."] },
        { title: 'API Development and Integration', description: 'Building and integrating APIs for seamless data exchange.', icon: 'fa-solid fa-link', details: ["Building and integrating APIs for connecting software systems."] },
        { title: 'Data Analytics and Business Intelligence', description: 'Data gathering, analysis, and insight generation.', icon: 'fa-solid fa-chart-line', details: ["Services for data warehousing, visualization, and predictive analytics."] },
        { title: 'Training and Support', description: 'Training sessions, documentation, and support.', icon: 'fa-solid fa-book', details: ["Offering training sessions, documentation, and ongoing support for clients."] }
    ];

    return (
        <div>
            <div className="header-section">
                <img
                    src="https://theredteamlabs.com/media/2024/10/5a3c2cef-cloud-security-1024x563-2.jpg"
                    alt="Header"
                    className="header-image"
                />
                <div className="header-text">
                    <div className="development">OUR SERVICES</div>
                    <div className="mt-3">Make your Business Smarter with Artificial Intelligence Services & Solutions</div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className={`card h-100 shadow-sm service-card`} style={{ animationDelay: `${0.4 * (index + 1)}s` }}>
                                <div className="card-body text-center">
                                    <div className="mb-3" style={{ fontSize: '2rem' }}>
                                        <i className={`${service.icon} feature-icon`} aria-hidden="true"></i>
                                    </div>
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.description}</p>
                                    <ul className="text-start" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                        {service.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
