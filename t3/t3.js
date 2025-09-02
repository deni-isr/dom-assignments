function showInfo() {
  const now = new Date();
  const target = document.getElementById("target");

  target.innerHTML = `
    <p><b>Browser:</b> ${navigator.userAgent}</p>
    <p><b>Operating system:</b> ${navigator.platform}</p>
    <p><b>Screen size:</b> ${screen.width} x ${screen.height}</p>
    <p><b>Available space:</b> ${screen.availWidth} x ${screen.availHeight}</p>
    <p><b>Date:</b> ${now.toLocaleDateString("fi-FI", { day: "numeric", month: "long", year: "numeric" })}</p>
    <p><b>Time:</b> ${now.toLocaleTimeString("fi-FI", { hour: "2-digit", minute: "2-digit" })}</p>
  `;
}

showInfo();
