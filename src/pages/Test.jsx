import React, { useState, useEffect } from 'react';
import "./Home.css";
import Card from '../components/Card';
const Test = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-aniwatch.onrender.com/anime/home');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data fetched from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <p>{data.spotlightAnimes[0].name}</p> */}
      <div>
        {data.spotlightAnimes.map(anime => (
          <Card name={anime.name} logo={anime.poster} />
        ))}
      </div>
    </div>
  );
};

export default Test;
