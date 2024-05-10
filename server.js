const express = require('express');
const app = express();

// Data biodata
const biodata = {
    nama: "Aditya Septiawan",
    nim: "123210014",
    kelas: "IF-F",
    jurusan: "Informatika"
};

// Endpoint untuk mengembalikan biodata
app.get('/', (req, res) => {
    res.json(__dirname, biodata);
});

// Port yang digunakan oleh server
const PORT = process.env.PORT || 8080;

// Mulai server
app.listen(PORT, () => {
    console.log(`Server berjalan pada port :${PORT}`);
});

