$(document).ready(function () {
  function handleResize() {
    if ($(window).width() > 768) {
      $(".menu").css("display", "flex"); // Ensure menu is displayed as flex for larger screens
    } else {
      $(".menu").css("display", "none"); // Reset for smaller screens
    }
  }

  // Initial check when the page loads
  handleResize();

  // Update on window resize
  $(window).resize(handleResize);

  // Toggle menu for smaller screens
  $("#click").click(function () {
    if ($(window).width() <= 768) {
      $(".menu").slideToggle();
    }
  });
});
