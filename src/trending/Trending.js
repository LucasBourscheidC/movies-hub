import React, {useState, useEffect} from "react";
import Tmdb from "../Tmdb";
import Rows from "../rows/Rows";
import "./series.css"

export default function Trending(){
     const [trendingList, setMoviesList] = useState([])

     useEffect(()=>{
        const loadData = async ()=>{
            let data = await Tmdb.getMoviesTvGenres("tv", 
            [10759, 16, 35, 10765, 10749, 80],
            ["Action","Animation","Comedy","Sci-fi","Romance","Crime"]);
            setMoviesList(data);
            console.log(data);
        }
        loadData();
     }, [])
    return <div className="container-rows">
            {trendingList.map((item, key)=>(
                <Rows  key={key} title={item.title} items={item.items} />
            ))}
    </div>;
}