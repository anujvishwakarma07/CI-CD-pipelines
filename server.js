import express from 'express';
import sum from './sum.js';

const app = express();
const PORT = 8000;

app.get('/test', async (req, res) => {
    res.json({
        message: "Api is working properly",
    })
})

app.get('/addSum/:a/:b', (req, res) => {
    const { a, b } = req.params;
    return res.json({
        sum: sum(parseInt(a), parseInt(b)),
    })
})


app.listen(PORT, () => {
    console.log(`App is listening on the port : ${PORT}`);
})