package com.company;

import models.Movie;
import express.Express;
import models.Viewing;

import java.util.Map;

import static express.database.Database.collection;

public class Main {

    public static void main(String[] args) {

        var app = new Express();

        app.enableCollections();

        app.get("/", (req, res) -> {
            res.send("Hello World");
        });

        app.get("/rest/movie", (req, res) -> {

            var movies = collection("Movie").find();


            res.json(movies);
        });
        app.post("/rest/movie", (req, res) -> {

            var movie = req.body(Movie.class);

            var savedMovie = collection("Movie").save(movie);

            System.out.println(savedMovie);

            res.json(savedMovie);
        });
        app.get("/rest/viewings",(req,res) -> {
            var viewing = collection("Viewing").find();
            res.json(viewing);
        });
        app.get("/rest/viewings/:id",(req,res) -> {
            String id = req.params("id");
            var viewing = collection("Viewing").findById(id);
            res.json(viewing);
        });
        app.put("rest/viewings/:id", (req, res) -> {
            String id = req.params("id");
            Map body = req.body();
            System.out.println(body);

            Viewing viewingInColl = collection("Viewing").findById(id);
            viewingInColl.setSeat_amount((int)body.get("seat_amount"));

            collection("Viewing").save(viewingInColl);
        });

        app.listen(4000);
    }
}
