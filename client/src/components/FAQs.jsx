import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "What technologies do you work with?",
    a: "I primarily work with JavaScript, React, Node.js, and Express.js, along with MongoDB and MySQL. I also use tools and technologies such as Prisma, REST APIs, Git, and GitHub to build full-stack web applications.",
  },
  {
    q: "What kind of projects have you built?",
    a: "I build responsive web applications and full-stack projects involving modern user interfaces, REST APIs, backend logic, and database integration. My projects focus on solving practical problems while strengthening my real-world development skills.",
  },
  {
    q: "Do you focus on frontend or full-stack development?",
    a: "My focus is full-stack web development, with a strong interest in frontend development and user experience. I enjoy working across the stack, from building React interfaces to developing backend APIs and connecting databases.",
  },
  {
    q: "How do you approach building a web application?",
    a: "I start by understanding the requirements and breaking the application into smaller features. Then I plan the UI, build the frontend and backend, integrate APIs and databases, test the functionality, fix issues, and refine the application.",
  },
  {
    q: "What kind of developer role are you looking for?",
    a: "I'm looking for a Junior Frontend or Full-Stack Developer role where I can contribute to real-world projects, strengthen my engineering skills, and continue growing while working with an experienced team.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="faqs-page" id="faqs">
      <div className="faqs-container">
        <div className="faqs-heading-area">
          <h2 className="faqs-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <div className="faqs-title-line"></div>
          <p className="faqs-subtitle">
            Placeholder subtitle — a quick set of answers to things people usually ask.
          </p>
        </div>

        <div className="faqs-list">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <article className={`faq-item${isOpen ? " is-open" : ""}`} key={i}>
                <button
                  type="button"
                  id={buttonId}
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <h3>{item.q}</h3>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>

                <div
                  className="faq-answer-wrapper"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <div className="faq-answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
