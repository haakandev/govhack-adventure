import React, { useState } from "react";
import "./App.css";
import Adventure from "./components/Adventure";
import adventures from "./adventures";

const isUnlocked = (adventure, adventures, visited) => {
  if (adventure.id === 1) {
    return true;
  }

  const currentIndex = adventures.reduce(
    (finalIndex, adv, index) => (adventure.id === adv.id ? index : finalIndex),
    -1
  );

  if (currentIndex > 0) {
    return (
      visited.find(
        visitedDecision =>
          visitedDecision.id[0] === adventures[currentIndex - 1].id
      ) !== undefined
    );
  }
  return false;
};

const App = () => {
  const [adventure, setAdventure] = useState(null);
  const [visited, setVisited] = useState([]);

  return (
    <div className="App">
      <h1>My Adventure</h1>
      <div className="adventure-list">
        {adventure ? (
          <Adventure
            adventure={adventure}
            returnHome={newlyVisited => {
              setVisited(v => [...v, ...newlyVisited]);
              setAdventure(null);
            }}
          />
        ) : (
          adventures.map(adventure => {
            const isAdventureUnlocked = isUnlocked(
              adventure,
              adventures,
              visited
            );
            return (
              <div
                className={`adventure-list__item-container ${
                  isAdventureUnlocked
                    ? ""
                    : "adventure-list__item-container--disabled"
                }`}
                {...(isAdventureUnlocked && {
                  onClick: () => setAdventure(adventure)
                })}
                key={adventure.id}
              >
                <img
                  src={adventure.image}
                  className="adventure-list__image"
                  alt=""
                />
                <h4>{adventure.name}</h4>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
