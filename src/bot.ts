import { Bot } from "grammy";
import { config } from "dotenv";
import * as handlers from "./handlers";
import express from "express";

const app = express()

app.get("/", (req, res) => {
   res.send("Hello world")
});

const port = 3000

app.listen(port, () => {
   console.log(`Listening on port: (${port})`);
});

config()

const bot = new Bot(process.env.BOT_TOKEN!)

bot.command("start",  handlers.start)

bot.start()

console.log("Bot Started")