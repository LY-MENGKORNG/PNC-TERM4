const express = require('express');

const routers = require('./routers.js')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static("public"));
app.use('/',routers)

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
