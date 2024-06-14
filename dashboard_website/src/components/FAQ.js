import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-main">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {/* Example FAQ */}
        <div className="faq-item">
          <h3>What is the purpose of this seminar?</h3>
          <p>The seminar aims to provide insights into the latest trends in IT and technology.</p>
        </div>
        {/* Add more FAQs here */}
      </div>
      <button className="raise-question">Raise New Question</button>
    </div>
  );
};

export default FAQ;
