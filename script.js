function filterMenu(category) {
    var items = document.getElementsByClassName('menu-category');
    for (var i = 0; i < items.length; i++) {
      if (category === 'all' || items[i].getAttribute('data-category') === category) {
        items[i].style.display = 'flex';
      } else {
        items[i].style.display = 'none';
      }
    }
  }

  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });