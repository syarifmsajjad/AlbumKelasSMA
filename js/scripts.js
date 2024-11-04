// Fungsi untuk filter berdasarkan kategori
function filterSelection(category) {
    const items = document.getElementsByClassName("gallery-item");
    if (category === "all") category = "";
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = items[i].className.indexOf(category) > -1 ? "block" : "none";
    }
}

// Menambahkan "active" class ke tombol yang dipilih
document.querySelectorAll(".filter-buttons button").forEach(button => {
    button.addEventListener("click", function() {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
});