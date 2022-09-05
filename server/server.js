import express  from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();

const MOVIES = [
    {
        title: "Dune - server",
        plot: " The desert world of Arrakis, source of all Melange, is fought over by two houses of the Imperium ",
        year: 2021
    },
    {
        title: "Plan 9 from outer space - server",
        plot: "I dunno mate... Bela Lugosi is in it, though...",
        year: 1957
    }
];

app.use(bodyParser.json());

app.get("/api/movies", (req, res) =>{
    res.json(MOVIES);
});

app.post("/api/movies", (req, res) =>{
    const {title, year, plot} = req.body;
    MOVIES.push({title, year, plot});
    res.sendStatus(200);
})

app.use(express.static(path.resolve("..", "client", "dist")));
app.use((req, res) => {
   res.sendFile(path.resolve("..", "client", "dist", "index.html"));
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on http://localhost:" + server.address().port);
});