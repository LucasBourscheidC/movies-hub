import React, {useState, useEffect} from "react";
import Tmdb from "../Tmdb";
import Rows from "../rows/Rows";
import "./movies.css"

export default function Movies({handleOverview}){
     const [moviesList, setMoviesList] = useState([])

     useEffect(()=>{
        const loadData = async ()=>{
            let data = await Tmdb.getMoviesTvGenres("movie",
             [28, 12, 35, 878, 10749, 27],
              ["Action","Adventure","Comedy","Sci-fi","Romance","Horror"]);
            setMoviesList(data);
            //console.log(data);
        }
        loadData();
     }, [])
    return <div className="container-rows">
            <h1 className="movies">Movies</h1>
            {moviesList.map((item, key)=>(
                <Rows  key={key} 
                title={item.title} 
                items={item.items} 
                handleOverview={handleOverview}
                />
            ))}
    </div>;
}