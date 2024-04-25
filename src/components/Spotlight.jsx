import HeartIcon from "./Heart"
import StarIcon from "./Star";
import React, { useState } from 'react';
export default function Spotlight() {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const [isStarred, setIsStarred] = useState(false);

    const handleStarClick = () => {
        setIsStarred(!isStarred);
    };


    return (
        <>
            <div className="h-96 w-60 px-4 hover:scale-110 duration-200">
                <img src="./Image/one-piece.jpg" className="rounded-lg" />
                <div className="flex justify-between">
                    Name
                    <div>
                        <button className="pr-2" onClick={handleStarClick}>
                            <StarIcon filled={isStarred} />
                        </button>

                        <button onClick={handleLike}>
                            <HeartIcon filled={isLiked} />
                        </button>

                    </div>

                </div>
            </div>
        </>
    )
}