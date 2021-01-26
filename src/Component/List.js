import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Input from "./Input";    
import Todo from "./Todo";

function List() {
    let [lists, setLists] = useState([]);

    let [task, setTask] = useState([]);

    let [urlApi] = useState("https://assets.breatheco.de/apis/fake/todos/user/Yoda2171");

    useEffect(() => {
        getTask(urlApi)
    }, []);

   let getTask = url => {       //METODO GET//
       fetch(url)
       .then(Response => Response.json())
       .then(data => console.log(data))
       .catch(error => console.log(error))
   }

   let createTask = url => { //METODO POST//
    fetch(url, {
        method: 'POST',
        body: JSON.stringify([]),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(Response => Response.json())
    .then(data => console.log(data.result))
    .catch(error => console.log(error));
    };

    let updateTask = (url, task) => { //METODO PUT//

        fetch(url, {
          method: 'PUT',
          body: JSON.stringify(task),
          headers: {
            'content-type': 'application/json'
          }
        }).then (response => response.json()
        ).then (data => console.log(data)

    
        ).catch(error => console.log(error))
    
    }

    let removeTask = (url, task) => { //METODO PUT//

        fetch(url, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
        }).then (response => response.json()
        ).then (data => console.log(data)

    
        ).catch(error => console.log(error))
    
    }

    




    function addList(list) {
        if(!list.text || /^\s*¨$/.test(list.text)){
          return
        }

        let newLists = [list, ...lists];
        let newTasks = [...task, {label: list.id, done:false }]
        setTask(newTasks);
        updateTask(urlApi, newTasks); 
        setLists(newLists);
        
    }

    function removeList (id) {

        lists.splice(id, 1);
        setLists([...lists])

        /* let removeArr = [...lists].filter(list => list.id !== id);
        setLists(removeArr); */


        task.splice(id, 1);
        setTask([...task])
        updateTask(urlApi, task);
        
        
        
    };

    const deleteAllTasks = () => {
        setLists([])
        setTask([])
        removeTask(urlApi)
    }


    let completeList = id => {
        let updateLists = lists.map(list => {
            if (list.id === id) {
                list.isComplete = !list.isComplete;
            }
            return list;
        });
        setLists(updateLists);
    }
    
    return (

        <div>
            <Input onSubmit={addList} createTask={() => createTask(urlApi)} deleteAllTasks={deleteAllTasks}/>
            <Todo lists={lists} completeList={completeList} removeList={removeList} />
        </div>

       
    )


}
export default List;