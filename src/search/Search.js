import React, {useEffect, useState} from "react"
import "./search.css"
import Tmdb from "../Tmdb";
import Card from "../card/Card";

export default function Search({searchKey, handleOverview}){
    const [searchList, setSearchList] = useState("");

    useEffect(() => {
        async function fetchSearch(searchKey) {
          if (!searchKey) return;
          let SLData = await Tmdb.getSearchList(searchKey);
          setSearchList(SLData);
        }
    
        fetchSearch(searchKey);
      }, [searchKey]);

    //fetchSearch(searchKey);
    console.log(searchList);
return <div className="search-div">
        {
          searchList.results && searchList.results.map((item, key)=>(
            <div className="search-div-card">
              <Card handleOverview={handleOverview} className="search-card" key={key} item={item}/>
            </div> 
          ))
        }
  </div> 
}