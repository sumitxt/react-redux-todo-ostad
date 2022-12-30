import React from 'react';

const TodoList = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="col-1">No</th>
                            <th className="col-9">Task Name</th>
                            <th className="col-1">Edit</th>
                            <th className="col-1">Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Task Name</td>
                            <td><button className="btn btn-danger">Edit</button></td>
                            <td><button className="btn btn-danger">Remove</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TodoList;