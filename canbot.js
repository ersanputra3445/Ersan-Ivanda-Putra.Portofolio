// Konfigurasi Chatbase
window.chatbaseConfig = {
  chatbotId: "qzEMKQ_rpF6b9mMGryjrQ"
};

// Load script Chatbase ke halaman
const script = document.createElement("script");
script.src = "https://www.chatbase.co/embed.min.js";
script.id = "qzEMKQ_rpF6b9mMGryjrQ";
script.defer = true;
document.body.appendChild(script);

// Trigger dari bubble custom kamu
document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.getElementById("custom-chat-trigger");
  if (trigger) {
    trigger.addEventListener("click", () => {
      if (window.Chatbase) {
        window.Chatbase.openChat();
      }
    });
  }
});
