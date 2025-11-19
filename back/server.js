const express = require('express')
const app = express()
const cors = require('cors')
const port = 5553

app.use(cors())
app.use('/cats', express.static('public'))


app.use('/cat/:id', (req, res) => {
    const {id }= req.params
    if(id < 1 || id > 9) {
        res.status(404).send('cat not found');
        return
    }
    res.json({url: `http://localhost:${port}/cats/cat${id}.jpg`})
})

app.listen(port, () => {
    console.log('server start port ' + port)
})