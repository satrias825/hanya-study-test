// Ambil elemen-elemen HTML
const angka1Input = document.getElementById("angka1");
const angka2Input = document.getElementById("angka2");
const hasilSpan = document.getElementById("hasil");

// Fungsi untuk melakukan perhitungan
function hitung(operator) {
    const angka1 = parseFloat(angka1Input.value);
    const angka2 = parseFloat(angka2Input.value);

    let hasil;

    switch (operator) {
        case 'tambah':
            hasil = angka1 + angka2;
            break;
        case 'kurang':
            hasil = angka1 - angka2;
            break;
        case 'bagi':
            hasil = angka1 / angka2;
            break;
        case 'kali':
            hasil = angka1 * angka2;
            break;
        default:
            hasil = "Operasi tidak valid";
            break;
    }

    hasilSpan.textContent = hasil;
}

// Tambahkan event listener untuk tombol-tombol operasi matematika
document.getElementById("tambah").addEventListener("click", function() {
    hitung('tambah');
});

document.getElementById("kurang").addEventListener("click", function() {
    hitung('kurang');
});

document.getElementById("bagi").addEventListener("click", function() {
    hitung('bagi');
});

document.getElementById("kali").addEventListener("click", function() {
    hitung('kali');
});
