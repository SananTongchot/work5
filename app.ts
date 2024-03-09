import express from "express";
import { router as insert } from "./api/insert";
import { router as find } from "./api/find";
import { router as remove } from "./api/remove";
import bodyParser = require("body-parser");
export const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());


app.use("/insert", insert);
app.use("/remove", remove);
app.use("/find", find);
