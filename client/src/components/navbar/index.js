import React from 'react'
import { Link } from "react-router-dom";


export default function Nav() {
    return (
        <div style={{ margin: "10px", display:"flex"}}>
            <span style={{flexBasis: "20rem"}}> Google Book Search</span>
            <div style={{ display: "inline-block", textAlign: "right", width: "95%" }}>
                <span style={{ marginRight: "10px"}}><Link to="/search"> Search</Link></span>
                <span style={{ textAlign: "right" }}> <Link to="/saved"> Saved</Link></span>
            </div>
        </div>
    )
}
