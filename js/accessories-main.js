// // accessories-main.js

// document.addEventListener('DOMContentLoaded', function() {
//     // Lace Color Customizer
//     const customShoe = document.getElementById('custom-shoe');
//     const colorButtons = document.querySelectorAll('.color-btn');

//     colorButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const color = this.getAttribute('data-color');
//             customShoe.style.filter = `drop-shadow(0 0 10px ${color})`;
//         });
//     });

//     // Insole Comfort Meter
//     const comfortMeter = document.querySelector('.meter-bar');
//     const comfortValue = document.querySelector('.meter-value');
//     const testComfortButton = document.getElementById('test-comfort');

//     testComfortButton.addEventListener('click', function() {
//         const randomComfort = Math.floor(Math.random() * 101);
//         comfortMeter.style.width = `${randomComfort}%`;
//         comfortValue.textContent = `${randomComfort}%`;
//     });

//     // Smooth scrolling for navigation links
//     const navLinks = document.querySelectorAll('nav a');

//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
            
//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     // Mobile navigation toggle
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');

//     burger.addEventListener('click', function() {
//         nav.classList.toggle('nav-active');
//         burger.classList.toggle('toggle');
//     });
// });