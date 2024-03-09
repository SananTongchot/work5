
import mysql from 'mysql';
import express from 'express';
import { conn } from "../dbconnect";
import bodyParser = require("body-parser");
export const router = express.Router();


router.get("/",(req, res) => {
    conn.query(mysql.format(`SELECT * FROM movie WHERE name LIKE ?`, ['%' + req.query.s + '%']), (err, movie) => {
        if (err) throw err;
        
        conn.query(mysql.format(`SELECT * FROM person JOIN star ON person.id = star.pid WHERE star.mid IN (SELECT id FROM movie WHERE name LIKE ?)`, ['%' + req.query.s + '%']), (err, star) => {
            if (err) throw err;

            conn.query(mysql.format(`SELECT * FROM person JOIN creator ON person.id = creator.pid WHERE creator.mid IN (SELECT id FROM movie WHERE name LIKE ?)`, ['%' + req.query.s + '%']), (err, creator) => {
                if (err) throw err;

                res.json({
                    movie: movie.map((movie: any) => ({
                        ...movie,
                        Star: star.filter((star : any) => star.mid === movie.id).map((star: any) => ({
                            pid: star.pid,
                        })),
                        Creator: creator.filter((creator: any) => creator.mid === movie.id).map((creator: any) => ({
                            pid: creator.pid,
                        }))
                    }))
                })
            });
        });
    });
});

