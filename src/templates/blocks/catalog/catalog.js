(function ($) {

  $(document).ready(function() {

    $('.js-show-inner-filter').on('click', function() {
      $(this).next('.inner-filter').slideToggle();
      $(this).toggleClass('filter-opened')
    });

  });

}(jQuery));
