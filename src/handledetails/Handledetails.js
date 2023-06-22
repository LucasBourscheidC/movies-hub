import React, {useState, useEffect} from "react";
import Showdetails from "../showdetails/Showdetails";
let STATE_BOOL = false
export default function Handledetails({setShowDetails, state}){

    useEffect(() => {
        console.log("arrozdoce")
        if (STATE_BOOL) {
          setShowDetails(<Showdetails/>);
        } else {
          setShowDetails(<></>);
        }
      }, [STATE_BOOL]);

    console.log(STATE_BOOL)
}

