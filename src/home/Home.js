import React, { useEffect, useState} from "react";
import Rows from "../rows/Rows";
import Tmdb from "../Tmdb";
import Head from "../head/Head";
import Highlight from "../highligth/Highlight";

export default function Home({handleOverview}){ 
    const [dataList, setData] = useState([])
    useEffect(()=>{
        const loadData = async () => {
            let data = await Tmdb.getHomeList();
            setData(data);
        }
        loadData();
    }, []);

    const [trendList, setTrendList] = useState([])
    useEffect(()=>{
        const loadTrending  = async () => {
            let trendingData  = await Tmdb.getTrending();
            setTrendList(trendingData);
        }
        loadTrending();
    }, []);
    return( <>
        <main>
            {
            trendList.results && trendList.results.length > 0 &&
            (() => {
                const [firstResult] = trendList.results.slice(0, 1);
                return <Highlight item={firstResult} />;
            })()
            }
        </main>
        <div className="container-rows">
            {dataList.map((item, key)=>(
                <Rows  key={key} title={item.title} 
                items={item.items} 
                handleOverview={handleOverview}/>
            ))}
        </div>    
    </>
    );
}