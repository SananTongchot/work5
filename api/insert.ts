import express from "express";
import mysql from "mysql";
import { conn } from "../dbconnect";
import bodyParser = require("body-parser");
import { MM, PM ,SM,CM} from "../model";
//ตัวจัดการเส้นทาง
export const router = express.Router();



router.post("/movie", (req, res) => {
        let movie: MM = req.body;
        let sql =
          "INSERT INTO `movie`(`name`, `image`,`detail`) VALUES (?,?,?)";
        sql = mysql.format(sql, [
            movie.name,
            movie.image,
            movie.detail
       
        ]);
        conn.query(sql, (err, result) => {
          if (err) throw err;
          res
            .status(201)
            .json({ affected_row: result.affectedRows, last_idx: result.insertId });
        });      
      });

      router.post("/creator", (req, res) => {
        let creator: CM = req.body;
        let sql =
          "INSERT INTO `creator`(`mid`, `pid`) VALUES (?,?)";
        sql = mysql.format(sql, [
            creator.mid,
            creator.pid
        ]);
        conn.query(sql, (err, result) => {
          if (err) throw err;
          res
            .status(201)
            .json({ affected_row: result.affectedRows, last_idx: result.insertId });
        });
      });


      router.post("/person", (req, res) => {
 
        let person : PM = req.body;
        let sql =
          "INSERT INTO `person`(`name`, `image`,`detail`) VALUES (?,?,?)";
        sql = mysql.format(sql, [
            person.name,
            person.image,
            person.detail
       
        ]);
        conn.query(sql, (err, result) => {
          if (err) throw err;
          res
            .status(201)
            .json({ affected_row: result.affectedRows, last_idx: result.insertId });
        });
      });

      router.post("/star", (req, res) => {
        let star: SM = req.body;
        let sql =
          "INSERT INTO `star`(`mid`, `pid`) VALUES (?,?)";
        sql = mysql.format(sql, [
            star.mid,
            star.pid
        ]);
        conn.query(sql, (err, result) => {
          if (err) throw err;
          res
            .status(201)
            .json({ affected_row: result.affectedRows, last_idx: result.insertId });
        });
      });