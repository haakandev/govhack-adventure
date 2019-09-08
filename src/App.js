import React, { useState } from "react";
import "./App.css";
import Adventure from "./components/Adventure";
import stories from "./stories";

const isUnlocked = (adventure, adventures, visited) => {
  if (adventure.id === 0) {
    return true;
  }

  const curAdvIndex = adventures.reduce(
    (foundIndex, adv, index) => (adventure.id === adv.id ? index : foundIndex),
    -1
  );

  if (curAdvIndex === 0) {
    return true;
  }

  return (
    visited.find(
      visAdv => visAdv.id === adventures[curAdvIndex - 1].story[0].id
    ) !== undefined
  );
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
            previouslyVisited={visited}
          />
        ) : (
          stories.map(adventure => {
            const isAdventureUnlocked = isUnlocked(adventure, stories, visited);
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
                  src={`./assets/${adventure.image}`}
                  className="adventure-list__image"
                  alt=""
                />
                <h4>START HERE</h4>
              </div>
            );
          })
        )}
      </div>
      <p>
        <strong>NOTE:</strong> The web version of the game is still a work in
        progress and not fully complete/polished. Please see the app showcased
        in our GovHack video as the fully designed submission as it is refined
        and fully functional version of the game. Source code for it can be
        found{" "}
        <a
          href="https://github.com/Onkiyo/GovHackAdventure"
          alt="iOS app source code"
        >
          here
        </a>
        .
      </p>
    </div>
  );
};

export default App;
