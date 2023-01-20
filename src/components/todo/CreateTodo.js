import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {AddTodo} from "../../redux/state/todo/todoSlice";
import Swal from 'sweetalert2'


const CreateTodo = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const dispatch = useDispatch();
    const taskInput = useRef()
    const preventEmpty = () => {
        if (!taskInput.current.value) {

            Toast.fire({
                icon: 'question',
                title: 'You have nothing to do?'
            })
        } else {
            dispatch(AddTodo(taskInput.current.value))
            Toast.fire({
                icon: 'success',
                title: 'Task added successfully'
            })
        }
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <input ref={taskInput} placeholder="Task Name" type="text"
                           className="form-control bg-dark text-white"/>
                </div>
                <div className="col-md-2">
                    <button onClick={preventEmpty}
                            className="btn animated-btn text-white">Add
                        to To Do
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;