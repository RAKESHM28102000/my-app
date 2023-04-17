import  { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import Content from "./content";
import Createcontent from "./Createcontent";


function App() {
    const [notes,setnotes]=useState([]);
    function AddNote(newnote){
        console.log(newnote);
            setnotes(preValue=>{
            return [...preValue,newnote];
        });
    }
    function DeleteNotes(deleteid){
        setnotes(preValues=>{
            return preValues.filter((deleteitem,index)=>{
                return index!==deleteid;
            })
        });

    }
    
    return <div className="app">
         <Header/>
        <Createcontent addNote={AddNote}/>
       <div className="container-fluid"> {notes.map((note,index)=>{
            return (<Note 
                 key={index}
                 id={index}
                 title={note.title}
                 content={note.content}
                 deletenote={DeleteNotes}
                 />)

        })}
        </div>
      
         <Footer/>
        </div>
    
}
export default App;