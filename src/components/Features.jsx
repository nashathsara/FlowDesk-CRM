import React from 'react';

export default function Features() {

    const cardData = [
        {
        id: 1,
        title: "Lead Tracking",
        desc:"Never drop a conversation with our simple horizontal pipeline layout."
        },

        {
        id: 2,
        title: "Client Timelines",
        desc: "See your entire interaction history with a contact at a single glance."
        },

        {
        id: 3,
        title: "Smart Follow-ups",
        desc: "Get gentle, automated alerts when a high-value lead goes quiet."
        }
    ];

    return(
        <section className="features-section">
            <div className="container">
                <h2>Key Features Built For Growth</h2>

                <ul className="features-grid">
                    {cardData.map((card) => (
                        <li className = "feature-card" key={card.id}>
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <footer className="footer">
                <p>&copy; 2026 FlowDesk CRM. All rights reserved.</p>
            </footer>
        </section>
    );
}