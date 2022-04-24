import React, { useState } from "react";
import { questions } from "./Api";
import "./Accordion.css";
import Myaccordion from "./Myaccordion"

const Accordion = () => {

    const [data, setData] = useState(questions);
    return (
        <>
            <section className="mainwborder">
                <h1>JavaScript Question & Answer</h1>
                {
                    data.map((curElem) => {
                        const { id } = curElem;
                        return <Myaccordion key={(id)} {...curElem} />
                    })
                }
            </section>


        </>
    )

}
export default Accordion;