import React from 'react';
import './PastSeminars.css';

const PastSeminars = () => {
  const seminars = [
    { title: 'AI in Healthcare', description: 'Discussing the impact of AI in modern healthcare.', date: '2024-05-20' },
    // Add more past seminars here
  ];

  return (
    <div className="past-seminars-main">
      <h2>Past Seminars</h2>
      <div className="seminar-list">
        {seminars.map((seminar, index) => (
          <div className="seminar-card" key={index}>
            <h3>{seminar.title}</h3>
            <p>{seminar.description}</p>
            <p>{seminar.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastSeminars;
