/* waktu */
setInterval(() => {
  getElementById('jam').innerHTML = `
  ${new Date().getHours()}:
  ${new Date().getMinutes()}:
  ${new Date().getSeconds()}`
}, 1000);

/* navbar slide */
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', function() {
  nav.classList.toggle('slide');
});