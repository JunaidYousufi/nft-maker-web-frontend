import React from "react"

const Button = ({text,icon}) => {
    return(
        <>
        <button>{text} {icon && <span>{icon}</span>}</button>
        </>
    )
}
export default Button;