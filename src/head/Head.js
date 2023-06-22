import React , {useState, useEffect} from "react";
import "./head.css"
import Tmdb from "../Tmdb";
import Home from "../home/Home";
import Search from "../search/Search";
import Movies from "../movies/Movies";
import Series from "../series/Series";
import Showdetails from "../showdetails/Showdetails";

export default function Head({changeState, handleOverview}){
    const [searchInput, setSearchInput] = useState("");

    function search (e) {
        e.preventDefault();
        changeState(<Search searchKey={searchInput} handleOverview={handleOverview}/>)
    }

    return(
        <header className="header-bar">
            <div className="container-bar-left">
                <p className="logo-text">WatchFlix</p>
                <ul>
                    <button className="nav-button" onClick={()=>{changeState(<Home handleOverview={handleOverview}/>)}}>Home</button>
                    <button className="nav-button" onClick={()=>{changeState(<Movies handleOverview={handleOverview}/>)}}>Movies</button>
                    <button className="nav-button" onClick={()=>{changeState(<Series handleOverview={handleOverview}/>)}}>Series</button>
                </ul>
            </div>
            <div className="container-bar-right">
                <form onSubmit={search}>
                    <input onChange={(e) => setSearchInput(e.target.value)} 
                    className="search-bar" 
                    type="text" 
                    placeholder="Search" 
                    />
                    <button className="button-submit" type={"submit"}> search</button>
                </form>
            </div>
        </header>
        
    )
}