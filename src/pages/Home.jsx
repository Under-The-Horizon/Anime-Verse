import "./Home.css";
import React, { useState, useEffect } from 'react';
import Spotlight from '../components/Spotlight.jsx'
import Navbar from "../components/Navbar.jsx";
import Trending from '../components/Trending.jsx'
import Genres from '../components/Genres.jsx'
import Loader from '../components/Loader.jsx';
import Top10 from "../components/Top10.jsx";
import Latest from '../components/Latest.jsx';

export default function Home() {
    const [buttonBg, setButtonBg] = useState("");
    const [content, setContent] = useState("");
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleButtonClick = (buttonContent) => {
        setContent(buttonContent);
    };

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
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const Week = data.top10Animes.week.map((anime) => (
        <Top10
            name={anime.name}
            poster={anime.poster}
        />
    ))
    const Today = data.top10Animes.today.map((anime) => (
        <Top10
            name={anime.name}
            poster={anime.poster}
        />
    ))
    const Month = data.top10Animes.month.map((anime) => (
        <Top10
            name={anime.name}
            poster={anime.poster}
        />
    ))

    const setBg = (para) => {
        setButtonBg(para)
        }
    

    return (
        <>
            <div className="Home h-screen overflow-scroll scrollbar-hide">
                <Navbar />
                <div className="flex flex-col w-screen">
                    <div className="h-96 w-screen">
                        <div className="h-20 text-2xl font-medium p-4 pl-8 text-white ">Spotlight</div>
                        <div className="h-72 flex flex-wrap overflow-scroll scrollbar-hide">
                            <div className="w-1/3 h-full text-7xl p-8 text-white">It's time for ANIME</div>
                            <div className="h-72 w-2/3 flex flex-wrap flex-col justify-center text-white">
                                {data.spotlightAnimes.map(anime => (
                                    <Spotlight name={anime.name} logo={anime.poster} />
                                ))}
                            </div> 
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-3/4">
                            <div className="h-20 text-2xl font-medium p-4 pl-8 text-white ">Trending</div>
                            <div className="h-80 w-full">
                                <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                                    {data.trendingAnimes.map(anime => (
                                        <Trending name={anime.name} logo={anime.poster} />
                                    ))}
                                </div>
                            </div>
                            <div className="h-20 text-2xl font-medium p-4 pl-8 text-white ">Latest Episodes</div>
                            <div className="w-full">
                                <div className="flex flex-wrap text-white align-middle ml-4">
                                    {data.latestEpisodeAnimes.map(anime => (
                                        <Latest name={anime.name} logo={anime.poster} />
                                    ))}
                                </div>
                            </div>
                            <div className="h-20 text-2xl font-medium p-4 pl-8 text-white ">Upcoming Animes</div>
                            <div className="w-full">
                                <div className="flex flex-wrap text-white align-middle ml-4">
                                    {data.topUpcomingAnimes.map(anime => (
                                        <Latest name={anime.name} logo={anime.poster} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 flex justify-center">
                            <div>
                                <div className="flex justify-between pt-4">
                                    <p className="text-2xl font-medium">Top 10</p>
                                    <div>
                                        <button onClick={() => { handleButtonClick(Week); setBg(1); }} className={`px-1 text-xl ${buttonBg == 1 ? 'bg-slate-400' : '' }`}>
                                            Today
                                        </button>
                                        <button onClick={() => { handleButtonClick(Today); setBg(2); }} className="px-1 text-xl ">
                                            Week
                                        </button>
                                        <button onClick={() => { handleButtonClick(Month); setBg(3); }} className="px-1 text-xl ">
                                            Month
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    {!content && (
                                        <div>
                                            <p>{Week}</p>
                                        </div>
                                    )}
                                    {content && (
                                        <div className='text-white'>
                                            <p>{content}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="text-2xl font-medium my-4">Genres</div>
                                <div className="flex w-80 flex-wrap justify-between">
                                    {data.genres.map(anime => (
                                        <Genres name={anime} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="h-14 text-2xl font-medium p-4 text-white">Top 10 Today</div>
                    <div className="h-96 w-screen">
                        <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                            {data.top10Animes.today.map(anime => (
                                <Trending name={anime.name} logo={anime.poster} />
                            ))}
                        </div>
                    </div>
                    <div className="h-14 text-2xl font-medium p-4 text-white">Top 10 Weekly</div>
                    <div className="h-96 w-screen">
                        <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                            {data.top10Animes.week.map(anime => (
                                <Trending name={anime.name} logo={anime.poster} />
                            ))}
                        </div>
                    </div>
                    <div className="h-14 text-2xl font-medium p-4 text-white">Top 10 Monthly</div>
                    <div className="h-96 w-screen">
                        <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                            {data.top10Animes.month.map(anime => (
                                <Trending name={anime.name} logo={anime.poster} />
                            ))}
                        </div>
                    </div>
                    <div className="h-14 text-2xl font-medium p-4 text-white">Upcoming Animes</div>
                    <div className="h-96 w-screen">
                        <div className="h-80 flex flex-wrap overflow-x-scroll scrollbar-hide flex-col text-white align-middle">
                            {data.topAiringAnimes.map(anime => (
                                <Trending name={anime.name} logo={anime.poster} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="h-14 text-2xl font-medium p-4 text-white">Genres</div>
                        <div className="flex w-80 flex-wrap justify-between">
                            {data.genres.map(anime => (
                                <Genres name={anime} />
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
};