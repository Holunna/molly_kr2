// импортирует модуль Express, который используется для создания веб-сервера.
const express = require('express');
const path = require('path');
// создает экземпляр приложения Express, называемый app. Этот объект app будет использоваться для настройки сервера и маршрутов.
const app = express();

// указывает серверу, что все статические файлы (например, изображения, CSS, JavaScript) будут обслуживаться из папки public.
app.use(express.static(path.join(__dirname, 'public')));

// определяет маршрут, который обрабатывает запросы к главной странице (URL /).
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/index.html'));
});

app.get('/algo_solution', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/algo_solution.html'));
});

// задает порт для сервера.
const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
