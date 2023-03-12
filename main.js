const { sign } = require("./X-Bogus.js");
const express = require('express')

const app = express()
const port = 3000


const url = "";
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36";
sign(url,userAgent)
function getXBogus(query, userAgent){
    const xbogus = sign(query, userAgent);
    console.log(xbogus)
    return {'X-Bogus':xbogus};
}


app.get('/x-bogus', (req, res) => {
    const query = req.query['query']
    const userAgent = req.query['user-agent']
    // console.log(req.query);
    res.json(getXBogus(query,userAgent))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/x-bogus/`)
})