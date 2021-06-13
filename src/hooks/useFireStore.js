import React, {useState, useEffect} from "react"
import {projectStorage, projectFirestore, timestamp} from "../Firebase/config"

function useFireStore(collection){

    const [docs , setDocs] = useState([])

    useEffect(() => {
       const unsub =  projectFirestore.collection(collection)
        .orderBy("createdAt", "desc")
        .onSnapshot((snap) => {
            let documents =[]
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents)
        })

        return () => unsub()
    }, [collection])
    return{
        docs
    }
}

export default useFireStore