import React, { useState } from "react";

function Footer(){
    let currentYear=new Date().getFullYear();
    const [year,setyear]=useState(currentYear);
   
    function setYear(){
        let newcurrentYear=new Date().getFullYear();
        setyear(newcurrentYear);
    }
    
    return <footer>
        <div onClick={setYear}>
        <p>copyright {year}</p>
        </div>
    </footer>
}
export default Footer;