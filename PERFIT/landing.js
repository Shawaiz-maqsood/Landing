document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! We'll get back to you shortly.");
});

  const videos = document.querySelectorAll('video');

  videos.forEach((video) => {
    video.addEventListener('play', () => {
      videos.forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
        }
      });
    });
  });

