const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// Промежуточное ПО для установки заголовка Origin-Trial
app.use((req, res, next) => {
    // Устанавливаем заголовок Origin-Trial для всех запросов
    req.headers['Origin-Trial'] = 'true';
    next();
    console.log(req.headers);
});

app.get('/', (req, res) => {
    res.send('Webview test');
});

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});