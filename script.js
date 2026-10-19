// Telegram username'ingizni shu yerga yozing (@ belgisisiz)
const TG_USERNAME = "boshlovchi_9903";

// Natija skrinshotlari: rasm fayllarini shu ro'yxatga qo'shing, masalan "img/1.jpg"
const SCREENSHOTS = [];

document.querySelectorAll("[data-tg]").forEach(a => {
  a.href = "https://t.me/" + TG_USERNAME;
  if (a.textContent.startsWith("@")) a.textContent = "@" + TG_USERNAME;
});

document.getElementById("year").textContent = new Date().getFullYear();

const shots = document.getElementById("shots");
if (SCREENSHOTS.length === 0) {
  document.getElementById("natija").hidden = true;
} else {
  SCREENSHOTS.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Mijoz natijasi";
    img.loading = "lazy";
    shots.appendChild(img);
  });
}

document.getElementById("send").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim() || "Mijoz";
  const service = document.getElementById("service").value;
  const text = `Assalomu alaykum! Men ${name}. "${service}" xizmatiga buyurtma bermoqchiman.`;
  window.open(`https://t.me/${TG_USERNAME}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});