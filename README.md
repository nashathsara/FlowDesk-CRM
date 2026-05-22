# FlowDesk CRM - Marketing Landing Page

A minimal, modern, and friendly landing page concept designed for FlowDesk CRM—a lightweight tool tailored to small agencies and freelancers to track leads, clients, and follow-ups.

## 🚀 How to Run and View the Project Locally

Follow these steps to set up and run the application on your machine:

1. Clone the Repository:
   ```bash
   git clone <your-github-repository-link>

2. Navigate into the Project Directory:
   cd flowdesk-crm 

3. nstall Dependencies:
   npm install

4. Start the Local Development Server:
   npm run dev

5. View in Browser:
   Open your browser and navigate to the local URL provided in your terminal (typically http://localhost:5173).

🎯 What Was Prioritized and Why
During implementation, focus was heavily placed on core front-end foundations rather than over-engineering the application layer:

Semantic HTML & Accessibility (a11y): Avoided generic div soup. Leveraged native semantic layouts (<main>, <section>, <header>, <ul>, <li>) to ensure optimal machine readability and screen-reader friendliness.

Component-Driven Architecture: Segmented the user interface into distinct, modular React components (Navbar, Hero, Features) to ensure maintainable and highly readable code patterns.

Robust Form State & Client-Side Validation: Implemented an explicit state-management workflow using React Hooks to provide robust input validation. It enforces structural email formats using strict regular expression pattern-matching without relying on external libraries.

Responsive Visual Hierarchy: Utilized structural CSS Flexbox layout flows to ensure a seamless UI transit between wide desktop layouts and single-column mobile screens without breakage.

Soft Minimalist Aesthetic: Followed a distinct design pivot toward warm organic colors, visible high-contrast contours, and proportional curves to create an interface that feels clean, reliable, and approachable.

⏳ Future Improvements (With More Time)
Given additional development time, the following features would be introduced next:

Persistent Local Storage Mock: Cache successfully submitted waitlist emails directly inside the browser's localStorage to simulate data persistence across window refreshes.

Micro-interactions & Framer Motion Transitions: Introduce elegant, non-intrusive entry animations for the feature cards and smooth transitions for the validation warning flags to enhance the user experience.

Automated Accessibility Auditing: Run automated accessibility checks using tool suites like axe-core to mathematically guarantee semantic and color-contrast compliance against modern web standard benchmarks.