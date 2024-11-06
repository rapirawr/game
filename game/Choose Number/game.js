// game.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Angka yang harus ditebak:", randomNumber);

let attempts = 0;
let wins = 0;  // Menambahkan variabel untuk menghitung kemenangan

document.getElementById('submitBtn').addEventListener('click', function () {
    const userInput = parseInt(document.getElementById('userInput').value);
    attempts++;

    if (userInput === randomNumber) {
        wins++;  // Menambahkan kemenangan
        document.getElementById('feedback').textContent = 'Selamat! Tebakan Anda benar!';
        document.getElementById('feedback').style.color = '#2ecc71';
        document.getElementById('attempts').textContent = attempts;
        document.getElementById('wins').textContent = wins; // Menampilkan jumlah kemenangan
        document.getElementById('resetBtn').style.display = 'block';
        document.getElementById('submitBtn').disabled = true;
    } else if (userInput < randomNumber) {
        document.getElementById('feedback').textContent = 'Tebakan Anda terlalu rendah!';
    } else {
        document.getElementById('feedback').textContent = 'Tebakan Anda terlalu tinggi!';
    }

    document.getElementById('attempts').textContent = attempts;
});

// Reset the game
document.getElementById('resetBtn').addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Angka yang harus ditebak (setelah reset):", randomNumber);
    attempts = 0;
    document.getElementById('userInput').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('resetBtn').style.display = 'none';
    document.getElementById('submitBtn').disabled = false;
});
