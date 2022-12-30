import React from 'react';

const CreateTodo = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <input placeholder="Task Name" type="text" className="form-control" />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary">Add to To Do</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;