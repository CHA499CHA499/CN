import React from 'react';

export default function Gallery({ works }) {
  return (
    <div className="gallery-container">
      {works.map(work => (
        <div key={work.id} className="artwork-item">
          <div className="work-preview"></div>
          <div className="work-meta">
            <h3>{work.title}</h3>
            <p className="medium">{work.medium}</p>
            <p className="description">{work.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}