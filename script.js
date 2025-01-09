// Toggle Theme
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);

  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Toggle Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



// Download Resume
const resumeButton = document.querySelector('.download-resume');

resumeButton.addEventListener('click', () => {
  window.open('https://app.flowcv.com/resume-feedback/s2casnkb11', '_blank');
});









// SKills Section
document.querySelectorAll('.skill-card').forEach((card) => {
    const progressText = card.querySelector('.progress-text');
    const progressCircle = card.querySelector('.ring-progress');
    const target = +progressText.getAttribute('data-target');
    const radius = progressCircle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
  
    progressCircle.style.strokeDasharray = circumference;
  
    let count = 0;
  
    const animateProgress = () => {
      count += 1;
      const offset = circumference - (count / 100) * circumference;
      progressCircle.style.strokeDashoffset = offset;
      progressText.textContent = `${count}%`;
  
      if (count < target) {
        requestAnimationFrame(animateProgress);
      }
    };
  
    animateProgress();
  });

  


//   Experience Section
document.addEventListener('DOMContentLoaded', () => {
    const experienceItems = document.querySelectorAll('.experience-item');
    let delay = 0;

    experienceItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, delay);
        delay += 500;  // Delay for the next item to appear after 500ms
    });
});





// Portfolio

// Add interactivity to the buttons
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".view-website-button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        // Get the parent card's data-url attribute
        const card = event.target.closest(".work-card");
        const url = card.getAttribute("data-url");
  
        // Open the URL in a new tab
        if (url) {
          window.open(url, "_blank");
        }
      });
    });
  });

  







//   Contact Section
document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    try {
      const response = await fetch('send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
      } else {
        alert('Failed to send the message. Please try again later.');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });





// // Testimonials
// const testimonials = document.querySelectorAll('.testimonial');
// let currentIndex = 2;

// function showTestimonial(index) {
//     testimonials.forEach((testimonial, i) => {
//         testimonial.style.display = i === index ? 'block' : 'none';
//     });
// }

// function startTestimonialCarousel() {
//     showTestimonial(currentIndex);
//     currentIndex = (currentIndex + 1) % testimonials.length;
// }

// setInterval(startTestimonialCarousel, 5000); // Rotate every 5 seconds






// Auto Type Effect
document.addEventListener("DOMContentLoaded", () => {
  const codeElement = document.getElementById("code");
  const codeText = codeElement.textContent.trim(); // Get the code text
  codeElement.textContent = ""; // Clear the element's content

  let index = 0;
  const typingSpeed = 50; // Speed of typing in milliseconds

  function typeCode() {
    if (index < codeText.length) {
      codeElement.textContent += codeText[index];
      index++;
      codeElement.innerHTML = Prism.highlight(
        codeElement.textContent,
        Prism.languages.javascript,
        'javascript'
      );
      setTimeout(typeCode, typingSpeed);
    }
  }

  typeCode();
});
