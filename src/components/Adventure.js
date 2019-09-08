import React, { useState } from "react";

const Adventure = ({ adventure, returnHome }) => {
  const [decision, setDecision] = useState(adventure.story[0]);
  const [visited, setVisited] = useState([]);
  const [results, setResults] = useState([]);

  const optionClickHandler = (decision, option) => {
    setVisited(v => [...v, decision]);
    if (decision[option] && decision[option].review) {
      setResults(r => [...r, decision[option].review]);
    }
    if (decision[option] && decision[option].next) {
      setDecision(adventure.story.find(d => d.id === decision[option].next));
    } else {
      setDecision(null);
    }
  };

  return (
    <div className="adventure">
      <h4 className="adventure__title">{adventure.name}</h4>
      {decision && (
        <div className="adventure__container">
          <div className="adventure__story-content">
            <h4 className="story__question">{decision.question}</h4>
            <p className="adventure__decision-text">{decision.text}</p>
            <img
              src={`./assets/${decision.image}`}
              className="adventure__image"
              alt=""
            />
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
          <div className="adventure__options-container">
            {decision.left && decision.left.label && (
              <button
                type="button"
                className="adventure__option"
                onClick={() => optionClickHandler(decision, "left")}
              >
                {decision.left.label}
              </button>
            )}
            {decision.right && decision.right.label && (
              <button
                type="button"
                className="adventure__option"
                onClick={() => optionClickHandler(decision, "right")}
              >
                {decision.right.label}
              </button>
            )}
          </div>
        </div>
      )}
      {!decision && (
        <>
          {results.length < 1 && (
            <p>
              You made no significant decisions. Not sure if impressed or
              apalled!
            </p>
          )}
          {results.map(result => (
            <div className="adventure__result-item">
              {!!result.image && (
                <img
                  src={`./assets/${result.image}`}
                  alt=""
                  className="adventure__result-image"
                />
              )}
              <p key={result.label}>{result.label}</p>
            </div>
          ))}
          {results.map(result => (
            <div key={result.label + result.infoUrl}>
              <a href={result.infoUrl}>{result.infoUrl}</a>
              <br />
            </div>
          ))}
          <button
            type="button"
            className="adventure__option"
            onClick={() => returnHome(visited)}
          >
            Return Home
          </button>
        </>
      )}
    </div>
  );
};

export default Adventure;
