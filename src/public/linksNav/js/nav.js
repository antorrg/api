
const routes = ['/', '/page2', '/page3'];
let currentIndex = routes.indexOf(window.location.pathname);

document.getElementById('current').textContent = `Página ${currentIndex + 1}`;

document.getElementById('prev').href = currentIndex > 0 ? routes[currentIndex - 1] : routes[0];
document.getElementById('next').href = currentIndex < routes.length - 1 ? routes[currentIndex + 1] : routes[routes.length - 1];
document.getElementById('last').href = routes[routes.length - 1]