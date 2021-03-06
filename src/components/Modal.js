import React from "react"

function Modal({selectedImg, setSelectedImg}){

    function handleClick(e){
        if(e.target.classList.contains("backdrop"))
        {
            setSelectedImg(null)
        }
        
    }

    return(
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged img" />
            
        </div>
    )
    
}

export default Modal
