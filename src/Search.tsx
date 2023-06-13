import React, { useState } from "react"
import Content from "./Content";
import "./Search.css"

function Search(){
    const [rel,setRel]=useState("")
    return (
        <div className="Search ">
            <form className="input-group flex-nowrap">
                <input type="text" className="ds-input form-control" onChange={input=>setRel(input.target.value)} placeholder="Search.." id="search" name="search"></input>
                
            </form>
            <Content search={rel}></Content>
        </div>
    )
}
export default Search