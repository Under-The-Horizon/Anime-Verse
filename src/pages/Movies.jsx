import "./Home.css";
import React, { useState, useEffect } from 'react';
import Spotlight from '../components/Spotlight.jsx'
import Navbar from "../components/Navbar.jsx";
import Trending from '../components/Trending.jsx'
import Genres from '../components/Genres.jsx'
import Loader from '../components/Loader.jsx';
import Movie from "../components/Movie.jsx";
import Top10 from "../components/Top10.jsx";

export default function Home() {
    const [content, setContent] = useState('');

    const handleButtonClick = (buttonContent) => {
        setContent(buttonContent);
    };
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [card, setCard] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api-aniwatch.onrender.com/anime/movie?page=1');
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
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const Top10=()=>{
        {data.top10Animes.week.map(anime => (
            <Movie name={anime.name} logo={anime.poster} />
        ))}
    }

    return (

        <div>
            <div className="overflow-scroll w-screen h-screen">
                <Navbar />
                <div className="w-screen flex">
                    <div className="w-3/4 h-full flex flex-wrap">
                        {data.animes.map(anime => (
                            <Movie name={anime.name} logo={anime.poster} />
                        ))}
                    </div>
                    <div className="w-1/4 flex justify-center bg-slate-500">
                        <div>
                            <p>Top 10</p>
                            <button onClick={() => handleButtonClick(Top10())}>
                                Show Content 1
                            </button>
                            <button onClick={() => handleButtonClick('Content 2')}>
                                Show Content 2
                            </button>
                            <button onClick={() => handleButtonClick('Content 3')}>
                                Show Content 3
                            </button>
                            <div>
                                {content && (
                                    <div className='text-white'>
                                        <h2>Content Display:</h2>
                                        <p>{content}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}