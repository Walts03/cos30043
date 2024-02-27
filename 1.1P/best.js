$(document).ready(function(){
    buildMap();
  });
  
  var sw = document.body.clientWidth,
      bp = 550,
      $map = $('.map');
  var static = "https://maps.google.com/maps/api/staticmap?center=55.7402023,12.5341835&zoom=13&markers=55.7402023,12.5341835&size=640x320&sensor=true";
  var embed = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.434937107131!2d-121.65917368442985!3d36.66404228305136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808df8ee00e0517f%3A0x23df7774ce2c395f!2s901%20S%20Main%20St%2C%20Salinas%2C%20CA%2093901%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1636482539900!5m2!1svi!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  
  function buildMap() {
    if(sw>bp) { //If Large Screen
        if($('.map-container').length < 1) { //If map doesn't already exist
          buildEmbed();
        }
    } else {
        if($('.static-img').length < 1) { //If static image doesn't exist
          buildStatic();
        }
    }
  };
  
  function buildEmbed() { //Build iframe view
      $('<div class="map-container"/>').html(embed).prependTo($map);
  };
    
  function buildStatic() { //Build static map
     var mapLink = $('.map-link').attr('href'),
         $img = $('<img class="static-img" />').attr('src',static);
     $('<a/>').attr('href',mapLink).html($img).prependTo($map); 
  }
  
  $(window).resize(function() {
    sw = document.body.clientWidth;
    buildMap();
    google.maps.event.trigger(map, "resize");
  });
  $('h3 span:first-child').after("<span class=\"dots\"> </span>");