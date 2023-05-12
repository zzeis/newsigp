import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tweets() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('http://localhost:3001/tweets');
        setTweets(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div>
      <h2>Tweets</h2>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <p>{tweet.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Tweets;
