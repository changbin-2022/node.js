const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");

app.set('view engine', 'ejs');
app.set('views', viewsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'html/index.html'));
})

app.get('/katya', (req, res) => {
    res.render('katya', { 
        title: 'ІС-33 Семенюк Катерина',
     });
});

app.get('/varya', (req, res) => {
    res.render('varya', { 
        title: 'ІС-33 Каленіченко Варвара',
     });
});

app.get('/maksym', (req, res) => {
    res.render('maksym', { 
        title: 'ІС-31 Гармаш Максим',
     });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        errorMessage: "Page not found",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});