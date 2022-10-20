import React from "react";

function Lif(Props) {
    // console.log(Props)
    return (
        <div>
            <h1>Lifting state up</h1>
            <button onClick={Props.alert}>Click</button>
        </div>
    )
}



export default Lif;