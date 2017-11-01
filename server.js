const express = require('express'),
    port = 3000

const app = express()

app.use(express.static('./'))

app.listen(port, _ => console.log(`listening on port ${port}`))