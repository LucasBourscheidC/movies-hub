import "./card.css";
import Reac, {useState, useEffect} from "react";
import Showdetails from "../showdetails/Showdetails";
import Handledetails, {setStateBool} from "../handledetails/Handledetails";
let defaultPosterURL = "http://image.tmdb.org/t/p/w300";

export default function Card({item, itemTitle, handleOverview}){
    return <>
        <img className="card"
            onClick={()=>{handleOverview(item)}}
            src={`${defaultPosterURL}${item.poster_path}`}
            alt={itemTitle}
        />
    </>
}