const { sign } = require("./X-Bogus.min.js");
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
    if (!query || !userAgent){
        res.sendStatus(400)
        res.send({'error': "参数错误"})
    }

    // console.log(req.query);
    res.json(getXBogus(query,userAgent))
})
app.get('/', (req,res) =>{
    res.send("请访问/x-bogus, params= {'query':'queryStr', 'useragent': 'useragent'}")
} )
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/x-bogus/`)
})