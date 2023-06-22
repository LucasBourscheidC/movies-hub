import React, { useEffect, useState} from "react";
import Home from "./home/Home";
import Search from "./search/Search";
import Head from "./head/Head";
import Showdetails from "./showdetails/Showdetails";

export default function App(){ 
    const [pageStates, setPageStates] = useState(<Home handleOverview={handleOverview}/>);
    const [overView, setOverView] = useState(<></>);
    function changeState(state){  
        setPageStates(state);
    }
    function handleOverview(item){
        if(item === undefined)
        {
            setOverView(<></>)
        }
        else{
            setOverView(<Showdetails item={item} handleOverview={handleOverview}/>)
        }

    }
    return( <>
            <Head changeState={changeState} handleOverview={handleOverview}/>
            {overView}
            {pageStates}
        </>
    );
}

