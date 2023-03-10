import React from 'react';
import {useSelector} from "react-redux";
import {TodoDeleteAlert} from "./TodoDeleteAlert";
import {TodoEditAlert} from "./TodoEditAlert";

const TodoList = () => {

    const todoItems = useSelector((state) => state.todo.value)

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

                        {todoItems.map((item, index) => {
                            return (
                                <tr key={index.toString()}>
                                    <td>{index+1}</td>
                                    <td>{item}</td>
                                    <td>
                                        <button onClick={() => {
                                            TodoEditAlert(index, item)
                                        }} className="btn btn-warning">Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            TodoDeleteAlert(index)
                                        }} className="btn btn-danger">Remove
                                        </button>
                                    </td>
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