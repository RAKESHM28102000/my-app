import React from "react";


function Note(props){
    function handledelete(){
        props.deletenote(props.id);

    }

    return <div className="Noteclass">
           <h2 className="headtaginnote">{props.title}</h2>
           <p className="parataginnote">{props.content}</p>
           <div><button className=" btn btn-primary buttonsubmit" onClick={handledelete}>Del</button></div>
          </div>

}
export default Note;