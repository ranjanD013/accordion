import React, { useState } from "react";

const Myaccordion = ({ question, Answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>

            <div className="mainTitle">
                <p onClick={() => setShow(!show)}> {show ? "➖" : "➕"}</p>
                <h3>{question} </h3>

            </div>
            {show && <p>{Answer}</p>}


        </>
    )
}
export default Myaccordion;