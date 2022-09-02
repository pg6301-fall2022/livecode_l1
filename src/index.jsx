import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

function FrontPage(){
    return <div>
        <h1> Lesson 2 - Movie database</h1>
        <ul>
            <li><Link to="/movies"> List Movies </Link></li>
            <li><Link to="movies/new"> New Movie </Link></li>
        </ul>
    </div>
}

function Application(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage/>}></Route>
            <Route path="/movies/new" element={<h1>New movie</h1>}></Route>
            <Route path="/movies" element={<h1>List movies</h1>}></Route>
        </Routes>
    </BrowserRouter>
}

root.render(
    <Application/>
);