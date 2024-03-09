import express from "express";
import { conn } from "../dbconnect";

export const router = express.Router();

router.delete("/movie/:id", (req, res) => {
    let id = +req.params.id;
    conn.query("delete from movie where id = ?", [id], (err, result) => {
        if (err) throw err;
        res.status(200).json({
            affected_row: result.affectedRows
        });
    });
});

router.delete("/person/:id",(req,res)=>{
    let id=+req.params.id;
    conn.query("delete from person where id = ?",[id], (err,result) => {
        if (err) throw err;
        res.status(200).json({
            affected_row: result.affectedRows
        });
    });
});

router.delete("/star/:id",(req,res)=>{
    let id=+req.params.id;
    conn.query("delete from star where sid = ?",[id], (err,result) => {
        if (err) throw err;
        res.status(200).json({
            affected_row: result.affectedRows
        });
    });
});

router.delete("/creator/:id",(req,res)=>{
    let id=+req.params.id;
    conn.query("delete from creator where cid = ?",[id], (err,result) => {
        if (err) throw err;
        res.status(200).json({
            affected_row: result.affectedRows
        });
    });
});