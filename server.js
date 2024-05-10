const express = require('express');
const app = express();

// Data film awal
let films = [
    {
        judul: "Inception",
        tahun: 2010,
        genre: "Science Fiction",
        rating: 8.8
    },
    {
        judul: "The Shawshank Redemption",
        tahun: 1994,
        genre: "Drama",
        rating: 9.3
    },
];

// Endpoint untuk mengembalikan data film
app.get('/', (req, res) => {
    res.json(films);
});

// Endpoint untuk memperbarui data film
app.post('/', (req, res) => {
    // Mendapatkan data film yang diperbarui dari body permintaan
    const updatedFilms = req.body;

    // Memperbarui data film dengan data yang diterima
    films = [...films, ...updatedFilms];

    res.json(films);
});

// Port yang digunakan oleh server
const PORT = process.env.PORT || 8080;

// Mulai server
app.listen(PORT, () => {
    console.log(`Server berjalan pada port:${PORT}`);
});
