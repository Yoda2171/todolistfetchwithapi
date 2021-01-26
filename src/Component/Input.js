import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Input(props) {
    let [input, setInput] = useState("");

    function cambio(e) {
        setInput(e.target.value);
        console.log(input)
    }

    function agrego(e) {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),      
            text: input
        })

        setInput("")
        
        
    }


    return (
        <>

        <form className="input" onSubmit={agrego}>
        <button type="button" onClick={props.createTask} className="btn btn-success btn-lg btn-block">Create user</button>
        <button type="button"  onClick={props.deleteAllTasks} className="btn btn-danger btn-lg btn-block">Delete all </button>
            <div className="input-group mb-3" >
                <input
                type="text" 
                className="form-control"
                onChange={cambio}
                name="text"
                value={input}>
                </input>
                
                <div className="input-group-append">
                    <button className="btn btn-outline-primary"  type="submit" id="button-addon2" >Add</button>
                </div>
            </div>
            
        </form>    
            
        </>
    )
}
 
export default Input;