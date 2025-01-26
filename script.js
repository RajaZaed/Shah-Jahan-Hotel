document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.num');
    const speed = 200; // Change this value to adjust the speed of the animation
  
    counters.forEach(counter => {
      const animate = () => {
        const target = +counter.getAttribute('data-target'); // '+' converts string to number
        const count = +counter.innerText; // current number
        
        // Calculate the increment step
        const increment = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(animate, 1); // adjust timeout for smoother animation
        } else {
          counter.innerText = target;
        }
      };
  
      animate();
    });
  });
  

  // button
  // Get the button:
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 200px from the top, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}