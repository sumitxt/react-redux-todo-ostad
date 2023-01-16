import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {AddTodo} from "../../redux/state/todo/todoSlice";
import Swal from "sweetalert2";

const CreateTodo = () => {

    const dispatch = useDispatch();
    const taskInput = useRef()
   const preventEmpty= ()=>{
        if(!taskInput.current.value){
            Swal.fire(
                'You have nothing to do!',
                'Are you lazy,mate?',
                'question'
            )
        }
        else{
            dispatch(AddTodo(taskInput.current.value))
            Swal.fire({
                icon: 'success',
                title: 'Your todo has been added',
                showConfirmButton: false,
                timer: 1500
            })
        } }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <input ref={taskInput} placeholder="Task Name" type="text"
                           className="form-control bg-dark text-white"/>
                </div>
                <div className="col-md-2">
                    <button onClick={preventEmpty}
                    className="btn btn-primary">Add
                        to To Do
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;