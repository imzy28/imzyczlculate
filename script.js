function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
    display.classList.remove('message'); // Hapus kelas CSS "message" saat membersihkan
}

function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
    display.classList.remove('message'); // Hapus kelas CSS "message" saat menambahkan input
}

function displayMessage() {
    var display = document.getElementById('display');
    display.value = '';
    display.classList.add('message'); // Tambahkan kelas CSS "message" untuk warna merah
    display.value = 'I Love You';
}
