import React, { useState } from 'react';

export default function Hero() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSumbit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (!email) {
            setError('Please enter your email address.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setSuccess(true);
        setEmail('');
    };

    return(
        <section className="hero-section">
            <div className="container">
                <h1>Manage your leads without the chaos</h1>
                <p>
                    FlowDesk CRM helps small agencies and freelancers 
                    track leads, clients and follow-ups in one clean dashboard
                </p>

                <form className="waitlist-form" onSubmit={handleSumbit}>
                    <input
                     type="text"
                     placeholder="Enter your email address"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                     <button type="submit">Join Waitlist</button>
                </form>

                {error && <p className="error-text">{error}</p>}
                {success && <p className="success-text">Success! You have been added to our waitlist.</p>}
            </div>
        </section>
    );
} 