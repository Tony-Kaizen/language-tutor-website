const sidebar = document.querySelector('#sidebar');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');

//show sidebar
navBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});
//close sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});