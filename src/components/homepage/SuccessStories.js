import React, { useState } from "react";

const SuccessStories = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const successStories = [
    {
      title:
        "Internal Accenture | Assessment: Digital Core Diagnostics (Insights used for Davos)",
      imageSrc: "https://placehold.co/600x400",
      details: {
        objective:
          "To present a new perspective to the Chief Commercial Officer, with the client's cost-cutting initiatives and heightened emphasis on R&D reinvention amidst budget reductions and short-term financial goals.",
        approach:
          "Showcased POV from S&C lead and CAL, while also including inputs from the account team.",
        nextSteps:
          "Provide high-level key recommendations on how TMO can evolve across the 5 pillars to meet customer, service, and talent needs.",
      },
    },
    {
      title: "Global Power Technology Player",
      imageSrc: "https://placehold.co/600x400",
      details: {
        objective: "Objective of Global Power Technology Player",
        approach: "Approach of Global Power Technology Player",
        nextSteps: "Next Steps of Global Power Technology Player",
      },
    },
    {
      title:
        "Large CPG Global Player | Assessment: Data Led Transformation LATAM",
      imageSrc: "https://placehold.co/600x400",
      details: {
        objective: "Objective of Large CPG Global Player",
        approach: "Approach of Large CPG Global Player",
        nextSteps: "Next Steps of Large CPG Global Player",
      },
    },
  ];

  const handlePrev = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="success-stories">
      <h2>Success Stories</h2>
      <button className="view-all-button">View All</button>
      <div className="carousel">
        <button className="carousel-button previous" onClick={handlePrev}>
          ← Previous
        </button>
        <div
          className="carousel-cell-container"
          style={{
            transform: `translateX(-${currentStoryIndex * 33}%)`,
          }}
        >
          {successStories.map((story, index) => (
            <div key={index} className="carousel-cell">
              <div className="success-story-card">
                <img src={story.imageSrc} alt={story.title} />
                <div className="story-details">
                  <h3>{story.title}</h3>
                  <p>
                    <strong>Objective:</strong> {story.details.objective}
                  </p>
                  <p>
                    <strong>Approach:</strong> {story.details.approach}
                  </p>
                  <p>
                    <strong>Next Steps:</strong> {story.details.nextSteps}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          Next →
        </button>
      </div>
      <div className="pagination">
        <span>
          {currentStoryIndex + 1} / {successStories.length}
        </span>
      </div>
    </section>
  );
};

export default SuccessStories;
