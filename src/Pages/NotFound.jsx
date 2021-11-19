import React from "react"
import {useNavigate} from "react-router-dom"
const Notfound = () => {
    let navigate = useNavigate();
    return(
        <>
        <h1>Looks like you are lost</h1>
        <button onClick={() => navigate(-1)}>Go Back?</button>
        </>
    )
}
export default Notfound;