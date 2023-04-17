import React, { useState } from "react";


function Createcontent(props){
    const [note,setnote]=useState({
        title:"",
        content:""
    });
function setNote(event){
    const {name,value}=event.target;
    setnote(preValue=>{
      return {...preValue,[name]:value}
    });
}
function handlesubmit(event){
    console.log(note)
    props.addNote(note);
    setnote({
        title:"",
        content:""
    });
    event.preventDefault();
}
const [isclicked,setisclicked]=useState(false);
    return <div className="Contentclass">
        {/* <form onSubmit={handlesubmit}> */}
       <div>{isclicked ?<input spellCheck="false" onChange={setNote} type="text" name="title" value={note.title} placeholder="Title"/> : null}</div>
       <div onClick={()=>setisclicked(true)}><textarea spellCheck="false" rows={isclicked?3:1} cols="30" type="text" onChange={setNote}  name="content" value={note.content} placeholder="Write Here..."/></div>
       <div><button className=" btn btn-dark buttonsubmit" onClick={handlesubmit}>ADD</button></div>
       {/* </form> */}
    </div>
}
export default Createcontent;
