//* Lightbox Example *//

//Problem: user when clicking on image, goes to a dead end. poor user exp.
//Solution: create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// An image to overlay
$overlay.append($image);

// A Caption
$overlay.append($caption);

//. Add overlay
$("body").append($overlay);

// Capture the click event on a link to an image
<<<<<<< HEAD
$("#imageGallery a").click(function(event){
=======
$("#gallery a").click(function(event){
>>>>>>> acc488325168a8d7a2299dcded3ec3b8e214fb26
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  
      // Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  // Show the overlay  
  $overlay.show();

  // Get child's alt attribute and set caption
<<<<<<< HEAD
  var captionText = $(this).children("img").attr("alt");
=======
  var captionText = $(this).children("a").attr("p");
>>>>>>> acc488325168a8d7a2299dcded3ec3b8e214fb26
  $caption.text(captionText);
});


// when overlay is clicked
$overlay.click(function(){
    // Hide the overlay
  $overlay.hide();
  
});

<<<<<<< HEAD
//* Lightbox example finished *//
=======
//* Lightbox example finished *//
>>>>>>> acc488325168a8d7a2299dcded3ec3b8e214fb26
