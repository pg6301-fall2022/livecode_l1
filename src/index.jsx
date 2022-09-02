import * as React from "react";
import {useState} from "react";
import * as ReactDOM from "react-dom/client";
import {Routes, Route, Link, BrowserRouter, useNavigate} from "react-router-dom";

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
            <div key={m.title}>
                <h2>{m.title} - ({m.year})</h2>
                <div> {m.plot} </div>
            </div>
        )}
    </div>
}


function NewMovie({onAddMovie}){
    const [title, setTitle] = useState("");
    const [year, setYear]  = useState(0);
    const [plot, setPLot]  = useState("");

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        console.log(MOVIES);
        onAddMovie({title, plot, year});
        navigate("/");
    }

    return <form onSubmit={handleSubmit}>
        <h1> Enter details for new Movie </h1>
        <div>
            <label> Title: <input value={title} onChange={e => setTitle(e.target.value)} /></label>
        </div>
        <div>
            <label> Year: <input value={year} onChange={e => setYear(e.target.value)} /></label>
        </div>
        <div>
            <label> Plot: <textarea value={plot} onChange={e => setPLot(e.target.value)}/></label>
        </div>
        <button>Submit</button>
    </form>
}

function Application(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage/>}></Route>
            <Route path="/movies/new" element={<NewMovie onAddMovie={m => MOVIES.push(m)}/>}></Route>
            <Route path="/movies" element={<ListMovies movies={MOVIES}/>}></Route>
        </Routes>
    </BrowserRouter>
}

root.render(
    <Application/>
);