const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

// ---- PANELS ----
const overlay = document.getElementById('overlay');

document.getElementById('notifBtn').addEventListener('click', () => {
  togglePanel('notifPanel');
  closePanel('bookingPanel');
});

document.getElementById('bookingBtn').addEventListener('click', () => {
  togglePanel('bookingPanel');
  closePanel('notifPanel');
});

function togglePanel(id) {
  const panel = document.getElementById(id);
  const isOpen = panel.classList.contains('open');
  if (isOpen) closePanel(id);
  else {
    panel.classList.add('open');
    overlay.classList.add('show');
  }
}

function closePanel(id) {
  document.getElementById(id).classList.remove('open');
  const notif = document.getElementById('notifPanel');
  const book  = document.getElementById('bookingPanel');
  if (!notif.classList.contains('open') && !book.classList.contains('open')) {
    overlay.classList.remove('show');
  }
}

function closeAllPanels() {
  closePanel('notifPanel');
  closePanel('bookingPanel');
  overlay.classList.remove('show');
}