import React, { useState } from 'react';

function Test() {
  const [content, setContent] = useState('');

  const handleButtonClick = (buttonContent) => {
    setContent(buttonContent);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('Content 1')}>
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
  );
}

export default Test;


// import React, { useState, useEffect } from 'react';
// import "./Home.css";
// import Card from '../components/Card';
// const Test = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api-aniwatch.onrender.com/anime/movie?page=1');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <div className='h-screen w-screen overflow-scroll text-white'>
//       <h1>Data fetched from API:</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//       {/* <p>{data.spotlightAnimes[0].name}</p> */}
//       </div>
//     </div>
//   );
// };

// export default Test;

// // {/* <>
// //             <Navbar />
// //             <div className="w-screen h-full flex bg-red-500">
// //                 <div className="w-3/4 h-full bg-green-300">
// //                     {/* {data.animes.map(anime => (
// //                         <Spotlight name={anime.name} logo={anime.poster} />
// //                     ))} */}
// //                 </div>
// //                 <div className="w-1/4 flex justify-center">
// //                     <Top />
// //                 </div>
// //             </div>
// //         </> */}

// // https://api-aniwatch.onrender.com/anime/{category}?page={page}
// // https://api-aniwatch.onrender.com/anime/movie?page=1