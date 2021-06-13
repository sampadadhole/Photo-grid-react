import React, {useState, useEffect} from "react"
import {projectStorage, projectFirestore, timestamp} from "../Firebase/config"


function useStorage(file){
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(0)
    const [url, setUrl] = useState(0)


    useEffect(() => {
        //all logic to upload file
        //settting references
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection("images")

        storageRef.put(file).on('state_changed', (snap) =>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)

        }, (err) =>{
            setError(err)
        }, async() => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp() 
            collectionRef.add({url, createdAt})
            setUrl(url)
        })

    },[file])

    return { progress , url , error}
}

export default useStorage