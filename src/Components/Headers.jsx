import React from "react";

function Headers(props) {
    console.log("Headers from ",props.data)
    
    return (
        <>
         
            <header>
                <div>Web logo</div>
                <div> <img src="https://img.icons8.com/external-bearicons-gradient-bearicons/64/40C057/external-add-to-cart-essential-collection-bearicons-gradient-bearicons.png"/> <span>{props.data.length}</span></div>
            </header>

        
        </>
    )
}
export default Headers;