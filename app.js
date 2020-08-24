/* Toggle Sidebar Menu */
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
/* Toggle Sidebar Menu */


/* Frequently Asked Questions */
const questions = document.querySelectorAll(".question");
//loop through all questions and add buttons
questions.forEach(question => {
  const btn = question.querySelector(".question-btn");
  //add event listener to all buttons
  btn.addEventListener("click", () => {
    //if current open item isn't clicked, close item
    questions.forEach(item => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    //open item
    question.classList.toggle("show-text");
  });
});
/* Frequently Asked Questions */

/* Footer */
const now = new Date();
const year = now.getFullYear();
const yearEl = document.querySelector('#year');

yearEl.innerHTML = year;
console.log(yearEl);
/* Footer */