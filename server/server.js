import express  from "express";
import path from "path";

const app = express();

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

app.get("/api/movies", (req, res) =>{
    res.json(MOVIES);
});

app.use(express.static(path.resolve("..", "client", "dist")));
app.use((req, res) => {
   res.sendFile(path.resolve("..", "client", "dist", "index.html"));
});

const server = app.listen(3000, () => {
    console.log("Listening on http://localhost:" + server.address().port);
})