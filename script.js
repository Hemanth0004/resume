$(document).ready(function () {
    $('nav a').on('click', function (event) {
      event.preventDefault();
      alert("Navigating to: " + $(this).attr('href'));
      window.location.href = $(this).attr('href');
    });
  });