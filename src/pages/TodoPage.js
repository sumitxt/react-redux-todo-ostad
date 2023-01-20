import React, {useEffect, useRef} from 'react';
import CreateTodo from "../components/todo/CreateTodo";
import TodoList from "../components/todo/TodoList";
import Typed from "typed.js";

const TodoPage = () => {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["My ToDo App"], // Strings to display
            // Speed settings
            startDelay: 300,
            typeSpeed: 200,
            backSpeed: 200,
            backDelay: 400,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <div className="card bg-dark text-white">
                        <div className="card-header">
                            <h5 className="text-center"><span ref={el}></span></h5>
                        </div>
                        <div className="card-body">
                            <CreateTodo></CreateTodo>
                            <TodoList></TodoList>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TodoPage;