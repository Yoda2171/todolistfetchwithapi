import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




function Todo({lists, completeList, removeList}) {
    let [creo, setCreo] = useState({
        id: null,
        value: ""
    })
    

    return lists.map ((list, i) => (
        <div 
        className={list.isComplete ? "list-row complete" : "list-row"}
        key={i}
        >
            <div className="container row">
                <div key={list.id} onClick={() => completeList(list.id)} >
                    {list.text}     
                </div>
                    <i className="fas fa-trash col-2"  onClick={() => removeList(list.text)}></i>
                    
            </div>
        </div>
    ))
}
export default Todo;