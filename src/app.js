const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '../public')))

app.get('/healthCheck', (req, res) => {
    res.send('Hello World!')
});

app.get('/', (_, res) => {
    res.sendFile('chat.html');
})


app.listen(port, () => {
    console.log(` 📶 The Server of the UI App is listening on port ${port}...`)
})