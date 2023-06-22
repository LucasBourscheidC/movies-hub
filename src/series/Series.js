import React, {useState, useEffect} from "react";
import Tmdb from "../Tmdb";
import Rows from "../rows/Rows";
import "./series.css"

export default function Series({handleOverview}){
     const [seriesList, setMoviesList] = useState([])

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
            <h1 className="series">Series</h1>
            {seriesList.map((item, key)=>(
                <Rows  key={key} 
                title={item.title} 
                items={item.items} 
                handleOverview={handleOverview}/>
            ))}
    </div>;
}