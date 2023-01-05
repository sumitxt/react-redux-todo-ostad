import React from 'react';
import {useSelector} from "react-redux";

const TodoList = () => {

    const todoItems=useSelector((state)=>state.todo.value)

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <table className="table text-white">
                        <thead>
                        <tr>
                            <th className="col-1">No</th>
                            <th className="col-9">Task Name</th>
                            <th className="col-1">Edit</th>
                            <th className="col-1">Remove</th>
                        </tr>
                        </thead>
                        <tbody>

                        {todoItems.map((item,i)=>{
                            return(
                                <tr key={i.toString()}>
                                    <td>{i}</td>
                                    <td>{item}</td>
                                    <td><button className="btn btn-warning">Edit</button></td>
                                    <td><button className="btn btn-danger">Remove</button></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TodoList;