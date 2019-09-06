import React, { useState } from "react";

const Adventure = ({ adventure, returnHome }) => {
  const [decision, setDecision] = useState(adventure.story.start);
  const [visited, setVisited] = useState([adventure.story.start]);

  const optionClickHandler = nextDecision => {
    setVisited(v => [...v, nextDecision]);
    setDecision(nextDecision);
  };

  return (
    <div className="adventure">
      <h3 className="adventure__title">{`You're playing ${adventure.name}!`}</h3>
      <div className="adventure__container">
        {decision.left && (
          <button
            type="button"
            className="adventure__option"
            onClick={() =>
              optionClickHandler(adventure.story[decision.left.next])
            }
          >
            {decision.left.text}
          </button>
        )}
        <div className="adventure__story-content">
          <p className="adventure__decision-text">{decision.text}</p>
          <img src={decision.image} className="adventure__image" alt="" />
          {decision.sources && (
            <div className="adventure__sources">
              {decision.sources.map(source => (
                <a
                  href={source.url}
                  className="adventure__source-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={source.text}
                >
                  {source.text}
                </a>
              ))}
            </div>
          )}
        </div>
        {decision.right && (
          <button
            type="button"
            className="adventure__option"
            onClick={() =>
              optionClickHandler(adventure.story[decision.right.next])
            }
          >
            {decision.right.text}
          </button>
        )}
      </div>
      {!decision.left && !decision.right && (
        <button
          type="button"
          className="adventure__option"
          onClick={() => returnHome(visited)}
        >
          Return Home
        </button>
      )}
    </div>
  );
};

export default Adventure;
