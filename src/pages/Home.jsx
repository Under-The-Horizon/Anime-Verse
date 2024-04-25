import "./Home.css";
import React, { useState, useEffect } from 'react';
import Card from "../components/Card";
import Spotlight from '../components/Spotlight.jsx'
import Navbar from "../components/Navbar.jsx";
import Trending from '../components/Trending.jsx'

export default function Home() {
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
        <>
            <div className="Home h-screen  overflow-scroll scrollbar-hide">
                <Navbar />
                <div className="flex flex-col">
                    <div className="h-96 w-screen">
                        <div className="h-16 text-2xl font-medium p-4 text-white">Spotlight</div>
                        <div className="h-72 flex flex-wrap overflow-scroll scrollbar-hide">
                            <div className="w-1/3 h-full text-7xl p-8 text-white">It's time for ANIME</div>
                            <div className="h-72 w-2/3 flex flex-wrap flex-col justify-center text-white">
                                {data.spotlightAnimes.map(anime => (
                                    <Spotlight name={anime.name} logo={anime.poster} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-14 text-2xl font-medium p-4 text-white">Trending</div>
                    <div className="h-96 w-screen">
                        <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                            {data.trendingAnimes.map(anime => (
                                <Trending name={anime.name} logo={anime.poster} />
                            ))}
                        </div>
                    </div>
                    <div className="h-14 text-2xl font-medium p-4 text-white">Latest Episodes</div>
                    <div className="h-96 w-screen">
                        <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                            {data.latestEpisodeAnimes.map(anime => (
                                <Trending name={anime.name} logo={anime.poster} />
                            ))}
                        </div>
                    </div>
                    <div className="h-14 text-2xl font-medium p-4 text-white">Upcoming Animes</div>
                    <div className="h-96 w-screen">
                        <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                            {data.topUpcomingAnimes.map(anime => (
                                <Trending name={anime.name} logo={anime.poster} />
                            ))}
                        </div>
                    </div>
                    {/* <div className="h-14 text-2xl font-medium p-4 text-white">Top 10 Animes</div>
                    <div className="h-96 w-screen">
                        <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                            {data.top10Animes.map(anime => (
                                <Trending name={anime.name} logo={anime.poster} />
                            ))}
                        </div>
                    </div> */}
                    {/* <div className="h-14 text-2xl font-medium p-4 text-white">Weekly Animes</div>
                    <div className="h-96 w-screen">
                        <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                            {data.week.map(anime => (
                                <Trending name={anime.name} logo={anime.poster} />
                            ))}
                        </div>
                    </div>
                    <div className="h-14 text-2xl font-medium p-4 text-white">Monthly Hits</div> */}
                    {/* <div className="h-96 w-screen">
                        <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                            {data.month.map(anime => (
                                <Trending name={anime.name} logo={anime.poster} />
                            ))}
                        </div>
                    </div> */}
                    <div className="h-14 text-2xl font-medium p-4 text-white">Upcoming Animes</div>
                    <div className="h-96 w-screen">
                        <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                            {data.topAiringAnimes.map(anime => (
                                <Trending name={anime.name} logo={anime.poster} />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )

}