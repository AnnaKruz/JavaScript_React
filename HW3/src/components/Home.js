import React, {Suspense} from "react";
import {Link, Outlet} from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function Home() {
    return (
        <Suspense fallback={<ClimbingBoxLoader/>}>
            <div>
                <h1>Homework03</h1>
                <nav className="main-nav" style={{display: "flex", justifyContent: "center", gap: "10vw"}}>
                    <Link className="link" to="conversion">Conversion (Task01)</Link>
                    <Link className="link" to="todolist">TodoList (Task02)</Link>
                </nav>
                <Outlet/>
            </div>
        </Suspense>
    );
}