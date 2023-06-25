
    const hotels = document.querySelectorAll('.hotel');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        const hotelId = entry.target.getAttribute('id');
        if (entry.isIntersecting) {
          document.querySelector(`nav a[href="#${hotelId}"]`).classList.add('active');
        } else {
          document.querySelector(`nav a[href="#${hotelId}"]`).classList.remove('active');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    hotels.forEach(hotel => {
      observer.observe(hotel);
    });