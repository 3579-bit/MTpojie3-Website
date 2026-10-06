const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 10000;
app.use(express.static(path.join(__dirname, "public")));
app.get("*", (_,res)=>res.sendFile(path.join(__dirname,"public","index.html")));
app.listen(port,()=>console.log(`MT破解屍 3.0 website running on ${port}`));
