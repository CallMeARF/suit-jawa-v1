var ulang = true
while (ulang) {
    // Menangkap pilihan player
    var p = prompt("Pilih: gajah, semut, orang")

    // Menangkap pilihan komputer
    var comp = Math.random()

    if (comp < 0.34) {
        comp = "gajah"
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "orang"
    } else {
        comp = "semut"
    }

    var hasil = ""
    // Menentukan rules
    if (p == comp) {
        hasil = "SERI"
    } else if (p == "gajah") {
        hasil = (comp == "orang") ? "MENANG!" : "KALAH!"
    } else if (p == "orang") {
        hasil = (comp == "gajah") ? "kALAH!" : "MENANG!"
    } else if (p == "semut") {
        hasil = (comp == "gajah") ? "MENANG!" : "KALAH!"
    } else {
        hasil = "Pilihan yang dimasukan SALAH!"
    }

    // Tampilkan hasil
    alert("Kamu memilih : " + p + " | Komputer memilih : " + comp + "\nHasilnya : Kamu " + hasil)

    ulang = confirm("Coba lagi?")
}

alert("Sampai Jumpa!")