import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [likes, setLikes] = useState(3);
  const [dislikes, setDislikes] = useState(2);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  return (
    <>
      <div className="card">
        <h2>
          Charles Francis Padua, BSIT 3 of CCDI Sorsogon wins Gold Medal in IT Software Solution
          for Business Category of the recent Philippine National Skills Competition or World Skills Philippines
          held last
        </h2>
        <p>August 21–25, 2024 at the World Trade Center</p>
        <br />

        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={handleDislike}>Dislike ({dislikes})</button>

        <h3>Total Ratings: {likes + dislikes}</h3>
      </div>
    </>
  );
}

export default App;
