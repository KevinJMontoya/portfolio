
  const mediaElements = document.querySelectorAll('.media');
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightbox-content');
  const closeBtn = document.querySelector('.close');

  mediaElements.forEach(el => {
    el.addEventListener('click', () => {
      lightboxContent.innerHTML = ''; 
      let clone = el.cloneNode(true);
      clone.removeAttribute('width');
      clone.removeAttribute('height');
      clone.controls = true; 
      lightboxContent.appendChild(clone);
      lightbox.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });


  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });