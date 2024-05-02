const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(req.headers);
    next();
});

app.get('/', (req, res) => {
    res.send('Webview test');
});

app.listen(3000, () => {
    console.log(`Server has been started on port ${port}`);
});