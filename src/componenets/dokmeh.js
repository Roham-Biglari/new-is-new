import React from "react";
import './dokmeh.css'

function Button({title="", className="",children}) {
    return(
        
        <button class={className}>{title}{children}</button>
        // <button class={className}>{title}</button>

        // <button class={`button-1 item2 ${className}`}>{children}</button>

    )
}

export default Button;