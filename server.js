const express = require('express');
const app = express();

// Data biodata awal
let biodata = {
  nama: "Aditya Septiawan",
  nim: "123210014",
  kelas: "IF-F",
<<<<<<< HEAD
  jurusan: "Informatika",
  fakultas : "FTI"
=======
  jurusan: "Informatika"
  Fakultas: "Fakultas Teknik Industri"
>>>>>>> 3c4cc2a4c838ad27544471ba272fa1810a6d2665
};

// Endpoint untuk mengembalikan biodata
app.get('/', (req, res) => {
  res.json(biodata);
});

// Endpoint untuk memperbarui biodata
app.post('/', (req, res) => {
  // Mendapatkan data biodata yang diperbarui dari body permintaan
  const updatedBiodata = req.body;

  // Memperbarui biodata dengan data yang diterima
  biodata = { ...biodata, ...updatedBiodata };

  res.json(biodata);
});

// Port yang digunakan oleh server
const PORT = process.env.PORT || 8080;

// Mulai server
app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
