import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const MOVIES = [
    {
        title: "Dune",
        plot: " The desert world of Arrakis, source of all Melange, is fought over by two houses of the Imperium ",
        year: 2021
    },
    {
        title: "Plan 9 from outer space",
        plot: "I dunno mate... Bela Lugosi is in it, though...",
        year: 1957
    }
];

const BAD_MOVIES = [
    {
        title: "Enter the Ninja",
        plot: " Guy in jeans is more ninja than the ninjas ",
        year: 1981
    },
    {
        title: "Plan 9 from outer space",
        plot: "I dunno mate... Bela Lugosi is in it, though...",
        year: 1957
    }
];

function FrontPage(){
    return <div>
        <h1> Lesson 2 - Movie database</h1>
        <ul>
            <li><Link to="/movies"> List Movies </Link></li>
            <li><Link to="movies/new"> New Movie </Link></li>
        </ul>
    </div>
}

function ListMovies({movies}){
    return <div>
        <h1> List Movies </h1>
        {
            movies.map( m =>
            <>
                <h2>{m.title} - {m.year}</h2>
                <div>
                    {m.plot}
                </div>
            </>
        )}
    </div>
}

function Application(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage/>}></Route>
            <Route path="/movies/new" element={<h1>New movie</h1>}></Route>
            <Route path="/movies" element={<ListMovies movies={MOVIES}/>}></Route>
        </Routes>
    </BrowserRouter>
}

root.render(
    <Application/>
);