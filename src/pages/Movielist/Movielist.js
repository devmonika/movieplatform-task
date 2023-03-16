import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movielist = () => {
    const[movies , setMovies] = useState([]);

    useEffect(()=>{
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h1 className='text-5xl text-left ml-16 mt-16 block font-extrabold text-rose-700 mb-10'>Movie List </h1>
           <div className='grid grid-cols-5 gap-4 mx-16'>
                {/* <Link><img src='https://i.postimg.cc/6p6qWW14/108b520c55e3c9760f77a06110d6a73b-240x360-crop-center-progressive.webp' className='h-80' alt=""/></Link> */}
                <Link to="/"><img src='https://i.postimg.cc/1RMLxy6j/1131w-uyh-MMqg93f-Q.webp' className='h-80' alt=""/></Link>
                <Link to="/"><img src='https://i.postimg.cc/RFYKf3yY/Family-opt.webp' className='h-80' alt=""/></Link>
                <Link to="/"><img src='https://i.postimg.cc/wBymzx7c/1131w-gg-Hwd-Wi-Pc-I.webp' className='h-80' alt=""/></Link>
                <Link to="/"><img src='https://i.postimg.cc/8Ctn2Hfr/posd1-1.webp' className='h-80' alt=""/></Link>
                <Link to="/"><img src='https://i.postimg.cc/QxgL6cmc/film-poster-graphic-design.jpg' className='h-80' alt=""/></Link>
           </div>

        </div>
    );
};

export default Movielist;