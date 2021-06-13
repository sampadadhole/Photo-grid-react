import React from "react"
 import useStorage from "../hooks/useStorage"
 import {useState , useEffect} from "react"


 function ProgressBar({file, setFile}){

    const {progress, url } = useStorage(file)
    
    useEffect(() =>{
        if(url){
            setFile(null)
        } 
    },[url])

    return(
        <div className="progress-bar" style ={{width: progress + "%"}}></div>
    )
 }
export default ProgressBar