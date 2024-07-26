    const starsContainer = document.querySelector('.stars');
    const numStars = 100;
    let starSpeed = 60;

    document.addEventListener('click', () => {
        const audio = document.getElementById('background-music');
        if (audio.paused) {
          audio.play();
        }
      });
      
    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 200}%`;
      star.style.left = `${Math.random() * 200}%`;
      star.style.animationDuration = `${starSpeed}s`;
      starsContainer.appendChild(star);

      setTimeout(() => star.remove(), starSpeed * 1000);
    }

    for (let i = 0; i < numStars; i++) {
      createStar();
    }

    setInterval(createStar, 1);

    document.addEventListener('click', () => {
      starSpeed = 10;
      document.querySelectorAll('.star').forEach(star => {
        star.style.animationDuration = `${starSpeed}s`;
      });

      const images = document.querySelectorAll('.image-container img');
      const activeImage = document.querySelector('.image-container img.active');
      let nextImage = activeImage.nextElementSibling || images[0];

      activeImage.classList.remove('active');
      activeImage.classList.add('out');
      nextImage.classList.add('active');

      // Reset the star speed when it reaches the first image again
      if (nextImage === images[0]) {
        starSpeed = 60;
        document.querySelectorAll('.star').forEach(star => {
          star.style.animationDuration = `${starSpeed}s`;
        });
      }

      // Remove the 'out' class from the previous image after the transition
      setTimeout(() => {
        activeImage.classList.remove('out');
        activeImage.style.transform = 'translate(-50%, -50%) translateX(2000%)';
      }, 1000); // This should match the transition duration
    });
