import React from 'react';
import './SeminarApplications.css';

const SeminarApplications = () => {
  const seminars = [
    { title: 'Blockchain Technology', description: 'Understanding the fundamentals of blockchain.', time: '10:00 AM - 12:00 PM', venue: 'Online' },
    // Add more seminar applications here
  ];

  return (
    <div className="seminar-applications-main">
      <h2>Seminar Applications</h2>
      <div className="seminar-list">
        {seminars.map((seminar, index) => (
          <div className="seminar-card" key={index}>
            <h3>{seminar.title}</h3>
            <p>{seminar.description}</p>
            <p>{seminar.time}</p>
            <p>{seminar.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeminarApplications;
