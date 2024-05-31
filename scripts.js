// Custom JavaScript for HeyLink Landing Page

// Add smooth scrolling to all links
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  
  // Add form submission handler (example)
  document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Your message has been sent!");
      // You can add form submission logic here
  });
  