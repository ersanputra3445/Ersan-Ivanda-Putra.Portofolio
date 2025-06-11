// === Firebase Config & Init ===
const firebaseConfig = {
  apiKey: "AIzaSyAoi5fu-MZ1p8QRF93CT6N2ymnBTnoagaQ",
  authDomain: "ersan-ivanda-putra-portfolio.firebaseapp.com",
  databaseURL: "https://ersan-ivanda-putra-portfolio-default-rtdb.firebaseio.com",
  projectId: "ersan-ivanda-putra-portfolio",
  storageBucket: "ersan-ivanda-putra-portfolio.firebasestorage.app",
  messagingSenderId: "266047462969",
  appId: "1:266047462969:web:36679c0beb8e9df747b7e8",
  measurementId: "G-FQBS7YW7E6"
};

// Pastikan firebase tersedia
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

// Tunggu sampai DOM siap
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("emailForm");
  const input = document.getElementById("emailInput");
  const message = document.getElementById("successMessage");

  if (!form || !input || !message) {
    console.error("Elemen form/email/message tidak ditemukan!");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = input.value.trim();
    console.log("Mau submit email:", email);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      message.textContent = "❌ Email tidak valid.";
      message.className = "message show error";
      return;
    }

    database.ref("emails").push({
      email: email,
      timestamp: new Date().toISOString()
    })
    .then(() => {
      form.reset();
      message.textContent = "✅ Email berhasil dikirim.";
      message.className = "message show success";
      console.log("Sukses simpan ke Firebase");
    })
    .catch((error) => {
      console.error("Gagal menyimpan ke Firebase:", error);
      message.textContent = "❌ Gagal menyimpan.";
      message.className = "message show error";
    });

    setTimeout(() => {
      message.className = "message";
      message.textContent = "";
    }, 4000);
  });
});
